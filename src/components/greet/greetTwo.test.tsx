// v9. TDD Approach
// 3 Phases

import { render, screen } from "@testing-library/react"
import GreetTwo from './greetTwo'
 
// Greet should render the text hello and if a name is passed into the component,
// It should render hello followed by the name

test("GreetTwo Renders Correctly", ()  => {
    render(<GreetTwo />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()

})

test.only('GreetTwo renders with a name', () => {
    render(<GreetTwo name='Lily'/>)
    const textElement = screen.getByText('Hello Lily')
    expect(textElement).toBeInTheDocument()
})

