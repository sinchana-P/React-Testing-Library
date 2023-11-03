import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import { Counter } from "./Counter";

describe('Counter', () => {
    test("Renders Correctly", () => {
        render(<Counter />)
        const countElement = screen.getByRole("heading")
        expect(countElement).toBeInTheDocument()

        const incrementButton = screen.getByRole("button", {
            name: 'Increment'
        })
        expect(incrementButton).toBeInTheDocument()

    })

    // To test the initialState of the component
    test('Renders a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0') // Make sure to have '0' as a String
    })

    test('Render a count of 1 after clicking the increment button', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
    })

    test('Render a count of 2 after clicking the increment button twice', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()
    })

    

})