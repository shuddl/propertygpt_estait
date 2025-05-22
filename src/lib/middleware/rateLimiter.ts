import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter for development
// In production, replace with Redis-based implementation
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
  keyGenerator?: (req: NextRequest) => string;
}

export function createRateLimiter(config: RateLimitConfig) {
  return async function rateLimiter(request: NextRequest): Promise<NextResponse | null> {
    const key = config.keyGenerator 
      ? config.keyGenerator(request)
      : getClientIdentifier(request);
    
    const now = Date.now();
    const windowStart = Math.floor(now / config.windowMs) * config.windowMs;
    const windowKey = `${key}:${windowStart}`;
    
    try {
      const current = rateLimitStore.get(windowKey) || { count: 0, resetTime: windowStart + config.windowMs };
      
      if (now > current.resetTime) {
        // Window has expired, reset
        current.count = 1;
        current.resetTime = windowStart + config.windowMs;
      } else {
        current.count++;
      }
      
      rateLimitStore.set(windowKey, current);
      
      // Clean up old entries
      for (const [storedKey, value] of rateLimitStore.entries()) {
        if (now > value.resetTime) {
          rateLimitStore.delete(storedKey);
        }
      }
      
      if (current.count > config.maxRequests) {
        return NextResponse.json(
          { 
            error: 'Too many requests',
            retryAfter: Math.ceil((current.resetTime - now) / 1000)
          },
          { 
            status: 429,
            headers: {
              'Retry-After': Math.ceil((current.resetTime - now) / 1000).toString(),
              'X-RateLimit-Limit': config.maxRequests.toString(),
              'X-RateLimit-Remaining': Math.max(0, config.maxRequests - current.count).toString(),
              'X-RateLimit-Reset': current.resetTime.toString()
            }
          }
        );
      }
      
      return null; // Continue processing
    } catch (error) {
      console.error('Rate limiting error:', error);
      return null; // Allow request on error
    }
  };
}

function getClientIdentifier(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0] : 'unknown';
  return ip;
}

// Pre-configured rate limiters
export const chatRateLimiter = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 20, // 20 messages per minute
});

export const apiRateLimiter = createRateLimiter({
  windowMs: 60 * 1000, // 1 minute
  maxRequests: 100, // 100 requests per minute
});

export const authRateLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // 5 auth attempts per 15 minutes
});

// Redis-based rate limiter for production use
export function createRedisRateLimiter(config: RateLimitConfig) {
  return async function rateLimiter(request: NextRequest): Promise<NextResponse | null> {
    // This would use Redis in production
    // For now, fall back to in-memory implementation
    return createRateLimiter(config)(request);
  };
}