// v13 - Filename Conventions:

// Filename Conventions
// • Files with test.js or .test.†sx suffix.
// • Files with .spec.js or spec.tsx suffix.
// • Files with js or .tsx suffix in __tests__ folders.
// Recommendation is to always put your tests next to the code they are testing so
// that relative imports are shorter.

// using it(), 
// To replicate:
// fit() - test.only(), 
// xit() - test.skip()

import { render, screen } from "@testing-library/react"
import GreetThree from './greetTwo'
 
describe('Greet' , () => {
        xit("Renders Correctly", ()  => {
            render(<GreetThree />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
})

describe('Multiple', () => {
    it('Renders with a name', () => {
        render(<GreetThree name='Lily'/>)
        const textElement = screen.getByText('Hello Lily')
        expect(textElement).toBeInTheDocument()
    })
})

// -----------------

// import { render, screen } from "@testing-library/react"
// import GreetThree from './greetTwo'
 
// describe.only('Greet' , () => {
//         test("Renders Correctly", ()  => {
//             render(<GreetThree />)
//         const textElement = screen.getByText('Hello')
//         expect(textElement).toBeInTheDocument()
//     })
// })

// describe('Multiple', () => {
//     test('Renders with a name', () => {
//         render(<GreetThree name='Lily'/>)
//         const textElement = screen.getByText('Hello Lily')
//         expect(textElement).toBeInTheDocument()
//     })
// })

// Output:

// PASS  src/components/greet/greet.spec.tsx
// Greet
//   √ Renders Correctly (129 ms)
// Multiple