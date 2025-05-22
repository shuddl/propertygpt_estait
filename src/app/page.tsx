import { AsymmetricContainer, AnticipatoryCopywrite, PredictiveSurface } from '@/components/design-system';
import Link from 'next/link';

export default function Home() {
  return (
    <AsymmetricContainer
      predictiveLeft={
        <div className="space-y-8 h-full flex flex-col justify-center">
          <div>
            <AnticipatoryCopywrite variant="predictive-heading">
              PropertyGPT
            </AnticipatoryCopywrite>
            <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-4">
              Anticipatory Real Estate Intelligence
            </AnticipatoryCopywrite>
          </div>

          <div className="space-y-4">
            <AnticipatoryCopywrite variant="insight-emphasis" anticipatory className="mb-4">
              Anticipated Actions
            </AnticipatoryCopywrite>
            
            <PredictiveSurface
              prediction="Get Started"
              confidence={0.95}
              variant="interactive"
              className="p-6"
            >
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                Begin your property search journey with AI-powered insights
              </AnticipatoryCopywrite>
            </PredictiveSurface>

            <PredictiveSurface
              prediction="Market Analysis"
              confidence={0.82}
              variant="interactive"
              className="p-6"
            >
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-800">
                Explore market trends and predictive analytics
              </AnticipatoryCopywrite>
            </PredictiveSurface>
          </div>
        </div>
      }
      
      conversationalRight={
        <div className="h-screen flex items-center justify-center p-8">
          <div className="max-w-2xl text-center space-y-8">
            <div>
              <AnticipatoryCopywrite variant="predictive-heading" className="text-intelligent-gray-800">
                The Future of Real Estate Intelligence
              </AnticipatoryCopywrite>
              <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600 mt-6">
                PropertyGPT anticipates your needs, surfaces opportunities you haven&apos;t considered, 
                and provides insights that elevate your real estate capabilities.
              </AnticipatoryCopywrite>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PredictiveSurface variant="elevated" className="p-6">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-3">
                  Predictive Search
                </AnticipatoryCopywrite>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  AI anticipates property preferences and market opportunities before you search.
                </AnticipatoryCopywrite>
              </PredictiveSurface>

              <PredictiveSurface variant="elevated" className="p-6">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-3">
                  Market Intelligence
                </AnticipatoryCopywrite>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  Real-time analysis with predictive insights for strategic decision making.
                </AnticipatoryCopywrite>
              </PredictiveSurface>

              <PredictiveSurface variant="elevated" className="p-6">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-3">
                  Compliance Assistant
                </AnticipatoryCopywrite>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  Instant answers to regulatory questions with cited sources.
                </AnticipatoryCopywrite>
              </PredictiveSurface>

              <PredictiveSurface variant="elevated" className="p-6">
                <AnticipatoryCopywrite variant="insight-emphasis" className="text-intelligent-gray-800 mb-3">
                  Lead Intelligence
                </AnticipatoryCopywrite>
                <AnticipatoryCopywrite variant="conversational-body" className="text-intelligent-gray-600">
                  Automated lead scoring and conversion predictions.
                </AnticipatoryCopywrite>
              </PredictiveSurface>
            </div>

            <div className="pt-8">
              <Link href="/chat">
                <button className="bg-predictive-magenta text-conversational-white px-8 py-4 rounded-xl font-predictive tracking-conversational hover:bg-predictive-magenta/90 transition-colors">
                  Start Anticipating
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
}