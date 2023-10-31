// v12 - Grouping Tests

// 3. wMultiple describe blocks r possible.

import { render, screen } from "@testing-library/react"
import GreetThree from './greetTwo'
 
describe.only('Greet' , () => {
        test("Renders Correctly", ()  => {
            render(<GreetThree />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
})

describe('Multiple', () => {
    test('Renders with a name', () => {
        render(<GreetThree name='Lily'/>)
        const textElement = screen.getByText('Hello Lily')
        expect(textElement).toBeInTheDocument()
    })
})

// Output: Multiple 

// PASS  src/components/greet/greetThree.test.tsx
// Greet
//   √ Renders Correctly (42 ms)
// Multiple
//   ○ skipped Renders with a name

// -----------------------------

// 2. Nesting is possible.

// import { render, screen } from "@testing-library/react"
// import GreetThree from './greetTwo'
 
// describe.only('Greet' , () => {
//         test("Renders Correctly", ()  => {
//             render(<GreetThree />)
//         const textElement = screen.getByText('Hello')
//         expect(textElement).toBeInTheDocument()
//     })

//     describe('Nested', () => {
//         test('Renders with a name', () => {
//             render(<GreetThree name='Lily'/>)
//             const textElement = screen.getByText('Hello Lily')
//             expect(textElement).toBeInTheDocument()
//         })
//     })
// })

// Output: Nested

// PASS  src/components/greet/greetThree.test.tsx
// Greet
//   √ Renders Correctly (28 ms)
//   Nested
//     √ Renders with a name (5 ms)

// ----------------------
// 1. Basic Grouping

// import { render, screen } from "@testing-library/react"
// import GreetThree from './greetTwo'

// describe.only('Greet' , () => {
    //         test("Renders Correctly", ()  => {
        //             render(<GreetThree />)
        //         const textElement = screen.getByText('Hello')
        //         expect(textElement).toBeInTheDocument()
        //     })
        
        //     test('Renders with a name', () => {
            //         render(<GreetThree name='Lily'/>)
            //         const textElement = screen.getByText('Hello Lily')
            //         expect(textElement).toBeInTheDocument()
            //     })
            // })
            
// ----------------------
            
            
// Output: o - run only changed files.

//  PASS  src/components/greet/greetThree.test.tsx
//   Greet
//   √ GreetThree Renders Correctly (35 ms)
//   √ GreetThree renders with a name (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        2.278 s, estimated 3 s
// Ran all test suites related to changed files.