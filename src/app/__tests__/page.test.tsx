import { render, screen } from '@testing-library/react'
import Page from '../page'

describe('Landing Page', () => {
  it('renders the main heading', () => {
    render(<Page />)
    
    const heading = screen.getByText('PropertyGPT')
    expect(heading).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Page />)
    
    const subtitle = screen.getByText('Anticipatory Real Estate Intelligence')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Page />)
    
    const description = screen.getByText(/PropertyGPT anticipates your needs/)
    expect(description).toBeInTheDocument()
  })

  it('renders the Start Anticipating button', () => {
    render(<Page />)
    
    const button = screen.getByRole('button', { name: 'Start Anticipating' })
    expect(button).toBeInTheDocument()
  })

  it('uses AsymmetricContainer layout', () => {
    const { container } = render(<Page />)
    
    // Should have the asymmetric container structure
    const layout = container.querySelector('.min-h-screen.bg-anticipatory-black.flex')
    expect(layout).toBeInTheDocument()
    
    // Should have predictive left section
    const leftSection = container.querySelector('.w-asymmetric-third')
    expect(leftSection).toBeInTheDocument()
    
    // Should have conversational right section
    const rightSection = container.querySelector('.w-asymmetric-two-thirds')
    expect(rightSection).toBeInTheDocument()
  })

  it('applies anticipatory design principles', () => {
    const { container } = render(<Page />)
    
    // Should have anticipatory black background
    const blackBackground = container.querySelector('.bg-anticipatory-black')
    expect(blackBackground).toBeInTheDocument()
    
    // Should have conversational white background
    const whiteBackground = container.querySelector('.bg-conversational-white')
    expect(whiteBackground).toBeInTheDocument()
    
    // Should have predictive magenta accents
    const magentaAccent = container.querySelector('.bg-predictive-magenta')
    expect(magentaAccent).toBeInTheDocument()
  })

  it('renders with proper typography hierarchy', () => {
    render(<Page />)
    
    const heading = screen.getByText('PropertyGPT')
    expect(heading).toHaveClass('font-anticipatory', 'font-ultra-thin')
    
    const subtitle = screen.getByText('Anticipatory Real Estate Intelligence')
    expect(subtitle).toHaveClass('font-conversational')
  })

  it('has proper accessibility structure', () => {
    render(<Page />)
    
    // Should have accessible button
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    
    // Should have proper text content
    const heading = screen.getByText('PropertyGPT')
    expect(heading).toBeInTheDocument()
  })
})