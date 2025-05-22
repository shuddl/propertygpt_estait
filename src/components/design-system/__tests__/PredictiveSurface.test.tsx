import { render, screen, fireEvent } from '@testing-library/react'
import { PredictiveSurface } from '../PredictiveSurface'

describe('PredictiveSurface', () => {
  it('renders with default variant styling', () => {
    render(
      <PredictiveSurface>
        <div>Content</div>
      </PredictiveSurface>
    )

    const surface = screen.getByText('Content').parentElement
    expect(surface).toHaveClass(
      'relative',
      'bg-conversational-white',
      'rounded-lg',
      'shadow-sm'
    )
  })

  it('renders with elevated variant styling', () => {
    render(
      <PredictiveSurface variant="elevated">
        <div>Content</div>
      </PredictiveSurface>
    )

    const surface = screen.getByText('Content').parentElement
    expect(surface).toHaveClass(
      'bg-conversational-white',
      'rounded-xl',
      'shadow-lg'
    )
  })

  it('renders with interactive variant styling', () => {
    render(
      <PredictiveSurface variant="interactive">
        <div>Content</div>
      </PredictiveSurface>
    )

    const surface = screen.getByText('Content').parentElement
    expect(surface).toHaveClass(
      'bg-conversational-white',
      'rounded-xl',
      'shadow-lg',
      'hover:shadow-xl',
      'transition-all',
      'duration-300',
      'cursor-pointer'
    )
  })

  it('shows prediction badge when confidence is high enough', () => {
    render(
      <PredictiveSurface
        prediction="Test Prediction"
        confidence={0.8}
      >
        <div>Content</div>
      </PredictiveSurface>
    )

    const badge = screen.getByText('Test Prediction')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass(
      'absolute',
      '-top-2',
      '-right-2',
      'bg-predictive-magenta',
      'text-conversational-white',
      'px-3',
      'py-1',
      'rounded-full',
      'text-xs',
      'cursor-pointer',
      'animate-predictive-pulse',
      'hover:scale-105',
      'transition-transform'
    )
  })

  it('hides prediction badge when confidence is too low', () => {
    render(
      <PredictiveSurface
        prediction="Test Prediction"
        confidence={0.6}
      >
        <div>Content</div>
      </PredictiveSurface>
    )

    expect(screen.queryByText('Test Prediction')).not.toBeInTheDocument()
  })

  it('hides prediction badge when no prediction is provided', () => {
    render(
      <PredictiveSurface confidence={0.9}>
        <div>Content</div>
      </PredictiveSurface>
    )

    const surface = screen.getByText('Content').parentElement
    expect(surface?.querySelector('.absolute.-top-2.-right-2')).not.toBeInTheDocument()
  })

  it('calls onAnticipate when prediction badge is clicked', () => {
    const mockOnAnticipate = jest.fn()
    
    render(
      <PredictiveSurface
        prediction="Test Prediction"
        confidence={0.8}
        onAnticipate={mockOnAnticipate}
      >
        <div>Content</div>
      </PredictiveSurface>
    )

    const badge = screen.getByText('Test Prediction')
    fireEvent.click(badge)
    
    expect(mockOnAnticipate).toHaveBeenCalledTimes(1)
  })

  it('applies custom className correctly', () => {
    render(
      <PredictiveSurface className="custom-class">
        <div>Content</div>
      </PredictiveSurface>
    )

    const surface = screen.getByText('Content').parentElement
    expect(surface).toHaveClass('custom-class')
  })

  it('renders children correctly', () => {
    render(
      <PredictiveSurface>
        <h1>Title</h1>
        <p>Description</p>
      </PredictiveSurface>
    )

    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('handles edge case with exactly threshold confidence', () => {
    render(
      <PredictiveSurface
        prediction="Threshold Test"
        confidence={0.7}
      >
        <div>Content</div>
      </PredictiveSurface>
    )

    // At exactly 0.7, should not show (needs > 0.7)
    expect(screen.queryByText('Threshold Test')).not.toBeInTheDocument()
  })

  it('handles edge case with confidence just above threshold', () => {
    render(
      <PredictiveSurface
        prediction="Above Threshold"
        confidence={0.71}
      >
        <div>Content</div>
      </PredictiveSurface>
    )

    expect(screen.getByText('Above Threshold')).toBeInTheDocument()
  })
})