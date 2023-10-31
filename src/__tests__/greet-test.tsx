// v13 - Filename Conventions

import { render, screen } from "@testing-library/react"
import GreetThree from '../components/greet/greetThree'
 
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

// Output:

// PASS  src/components/greet/greet.spec.tsx
// PASS  src/__tests__/greet-test.tsx