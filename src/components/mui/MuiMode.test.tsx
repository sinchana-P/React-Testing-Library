// 1.
// import { render, screen } from '@testing-library/react'
// 2.
import { render, screen } from '../../test-utils'
import { MuiMode } from './MuiMode'
// import { AppProviders } from '../../providers/AppProviders'

describe('MuiMode', () => {
    // Providers - to wrap the components when testing
// 1.
//   test('renders text correctly', () => {
//     render(<MuiMode />, {
//         wrapper: AppProviders
//     })
//     const headingElement = screen.getByRole('heading')
//     expect(headingElement).toHaveTextContent('dark mode')
//   })

// 2. This allowed (import line 4), remove the individual wrapper option from each render function. 
    test('renders text correctly', () => {
        render(<MuiMode />)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('dark mode')
    })


  test('renders text in white color for dark mode', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })

})
