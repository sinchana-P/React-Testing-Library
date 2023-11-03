import { render, screen } from '@testing-library/react'
// import { render, screen } from '../../test-utils'
import { MuiMode } from './MuiMode'
import { AppProviders } from '../../providers/AppProviders'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />, {
        wrapper: AppProviders
    })
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })


})
