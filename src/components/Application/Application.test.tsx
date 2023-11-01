import {render, screen} from '@testing-library/react'
import { Application } from './Application'

describe('Appliaction', () => {
    test('renders correctly', () => {
        render(<Application />);
        const nameElement = screen.getByRole("textbox");
        expect(nameElement).toBeInTheDocument()

        // for drop-down
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument()

        // for terms
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        // for submit button
        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()
    })
})

//  PASS  src/components/Application/Application.test.tsx
//   Appliaction
//   √ renders correctly (91 ms)

