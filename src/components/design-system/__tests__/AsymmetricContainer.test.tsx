import { render, screen } from '@testing-library/react'
import { AsymmetricContainer } from '../AsymmetricContainer'

describe('AsymmetricContainer', () => {
  it('renders with default layout structure', () => {
    render(
      <AsymmetricContainer
        predictiveLeft={<div data-testid="predictive-content">Predictive</div>}
        conversationalRight={<div data-testid="conversational-content">Conversational</div>}
      />
    )

    // Should render the asymmetric layout
    const container = screen.getByRole('main').parentElement
    expect(container).toHaveClass('min-h-screen', 'bg-anticipatory-black', 'flex')

    // Should render predictive left sidebar
    const sidebar = screen.getByTestId('predictive-content').parentElement
    expect(sidebar).toHaveClass('w-asymmetric-third', 'bg-anticipatory-black')
    expect(screen.getByTestId('predictive-content')).toBeInTheDocument()

    // Should render conversational right main area
    const main = screen.getByTestId('conversational-content').parentElement
    expect(main).toHaveClass('w-asymmetric-two-thirds', 'bg-conversational-white')
    expect(screen.getByTestId('conversational-content')).toBeInTheDocument()
  })

  it('renders anticipatory elements when provided', () => {
    render(
      <AsymmetricContainer
        predictiveLeft={<div>Predictive</div>}
        conversationalRight={<div>Conversational</div>}
        anticipatoryElements={<div data-testid="anticipatory-elements">Anticipatory</div>}
      />
    )

    expect(screen.getByTestId('anticipatory-elements')).toBeInTheDocument()
  })

  it('applies custom className correctly', () => {
    render(
      <AsymmetricContainer
        predictiveLeft={<div>Predictive</div>}
        conversationalRight={<div>Conversational</div>}
        className="custom-class"
      />
    )

    const container = screen.getByRole('main').parentElement
    expect(container).toHaveClass('custom-class')
  })

  it('renders decorative elements correctly', () => {
    const { container } = render(
      <AsymmetricContainer
        predictiveLeft={<div>Predictive</div>}
        conversationalRight={<div>Conversational</div>}
      />
    )

    // Should have gradient separator line
    const gradientLine = container.querySelector('.absolute.top-0.right-0.w-px')
    expect(gradientLine).toHaveClass('bg-gradient-to-b', 'from-transparent', 'via-intelligent-gray-200')

    // Should have predictive magenta accent
    const magentaAccent = container.querySelector('.absolute.bottom-0.right-4')
    expect(magentaAccent).toHaveClass('bg-predictive-magenta', 'opacity-60')

    // Should have top accent line
    const topAccent = container.querySelector('.absolute.top-8.left-0')
    expect(topAccent).toHaveClass('bg-predictive-magenta', 'opacity-40')
  })

  it('has proper accessibility structure', () => {
    render(
      <AsymmetricContainer
        predictiveLeft={<div>Predictive</div>}
        conversationalRight={<div>Conversational</div>}
      />
    )

    // Should have semantic HTML structure
    expect(screen.getByRole('complementary')).toBeInTheDocument() // aside element
    expect(screen.getByRole('main')).toBeInTheDocument() // main element
  })
})