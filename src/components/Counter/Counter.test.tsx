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
        expect(countElement).toHaveTextContent('1')
    })

    // test('Render a count of 2 after clicking the increment button twice', async () => {
    //     user.setup()
    //     render(<Counter />)
    //     const incrementButton = screen.getByRole('button', {
    //         name: 'Increment'
    //     })
    //     await user.click(incrementButton)
    //     const countElement = screen.getByRole('heading')
    //     expect(countElement).toHaveTextContent('2')
    // })

    // KEYBOARD INTERACTIONS
    // Role for Input button, type:number is - Role: 'spinbutton
    test('Render a count of 10 after clicking the set button', async () => {
        user.setup()
        render(<Counter />)
        // Input element: amount
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)

        // Simulate click event on the SET Button
        const setButton = screen.getByRole('button', {
            name: 'Set'
        }) 
        //  Simulate the click interaction
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent("10")
    })

    // Elements are focused in the right order (tab click)
    test('Elements are focused in the right order', async () => {
        user.setup()
        render(<Counter />)
        
        // Get hold of all the 3 elements
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', {name: 'Set'})
        const incrementButton = screen.getByRole('button', {name: 'Increment'})
        
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
        
    })


})