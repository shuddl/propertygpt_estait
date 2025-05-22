import { render, screen } from '@testing-library/react'
import { AnticipatoryCopywrite } from '../AnticipatoryCopywrite'

describe('AnticipatoryCopywrite', () => {
  it('renders predictive-heading variant correctly', () => {
    render(
      <AnticipatoryCopywrite variant="predictive-heading">
        Predictive Heading
      </AnticipatoryCopywrite>
    )

    const element = screen.getByText('Predictive Heading')
    expect(element).toHaveClass(
      'font-anticipatory',
      'font-ultra-thin',
      'text-4xl',
      'lg:text-5xl',
      'tracking-anticipatory',
      'leading-tight',
      'text-conversational-white'
    )
  })

  it('renders conversational-body variant correctly', () => {
    render(
      <AnticipatoryCopywrite variant="conversational-body">
        Conversational Body
      </AnticipatoryCopywrite>
    )

    const element = screen.getByText('Conversational Body')
    expect(element).toHaveClass(
      'font-conversational',
      'font-conversational',
      'text-sm',
      'tracking-conversational',
      'leading-relaxed',
      'text-intelligent-gray-800'
    )
  })

  it('renders insight-emphasis variant correctly', () => {
    render(
      <AnticipatoryCopywrite variant="insight-emphasis">
        Insight Emphasis
      </AnticipatoryCopywrite>
    )

    const element = screen.getByText('Insight Emphasis')
    expect(element).toHaveClass(
      'font-conversational',
      'font-predictive',
      'text-sm',
      'tracking-conversational',
      'text-intelligent-gray-800'
    )
  })

  it('applies anticipatory styling when anticipatory prop is true', () => {
    render(
      <AnticipatoryCopywrite variant="conversational-body" anticipatory>
        Anticipatory Text
      </AnticipatoryCopywrite>
    )

    const element = screen.getByText('Anticipatory Text')
    expect(element).toHaveClass('text-predictive-magenta')
  })

  it('applies custom className correctly', () => {
    render(
      <AnticipatoryCopywrite 
        variant="conversational-body" 
        className="custom-class"
      >
        Custom Text
      </AnticipatoryCopywrite>
    )

    const element = screen.getByText('Custom Text')
    expect(element).toHaveClass('custom-class')
  })

  it('renders children correctly', () => {
    render(
      <AnticipatoryCopywrite variant="conversational-body">
        <span>Child Element</span>
        <div>Another Child</div>
      </AnticipatoryCopywrite>
    )

    expect(screen.getByText('Child Element')).toBeInTheDocument()
    expect(screen.getByText('Another Child')).toBeInTheDocument()
  })

  it('combines base classes with color classes correctly', () => {
    const { rerender } = render(
      <AnticipatoryCopywrite variant="predictive-heading">
        Test
      </AnticipatoryCopywrite>
    )

    let element = screen.getByText('Test')
    expect(element).toHaveClass('text-conversational-white')
    expect(element).not.toHaveClass('text-predictive-magenta')

    rerender(
      <AnticipatoryCopywrite variant="predictive-heading" anticipatory>
        Test
      </AnticipatoryCopywrite>
    )

    element = screen.getByText('Test')
    expect(element).toHaveClass('text-predictive-magenta')
    expect(element).not.toHaveClass('text-conversational-white')
  })
})