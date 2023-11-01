import {render, screen} from '@testing-library/react'
import { Application } from './Application'

describe('Appliaction', () => {
    test('renders correctly', () => {
        render(<Application />);
        
        // Query Methods:
        // 1. getByRole & its options

        // // For headings
        // const pageHeading = screen.getByRole('heading', {
        //     name: "Job application form"
        // })
        // expect(pageHeading).toBeInTheDocument()

        // // for section heading
        // const sectionHeading = screen.getByRole('heading', {
        //     name: 'Section 1'
        // })
        // expect(sectionHeading).toBeInTheDocument()

        // For headings
        // Instead of name, use "level"
        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument()

        // for section heading
        const sectionHeading = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument()
        
        const nameElement = screen.getByRole("textbox", {
            name: 'Name',
        });
        expect(nameElement).toBeInTheDocument()  

        // for bio element
        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        })
        expect(bioElement).toBeInTheDocument()

        // for drop-down
        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument()

        // for terms
        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()

        // for submit button
        const submitButtonElement = screen.getByRole('button')
        expect(submitButtonElement).toBeInTheDocument()

        // 2. getByLabelText
        const nameElement2 = screen.getByLabelText("Name")
        expect(nameElement2).toBeInTheDocument()
                // here "Name" is the label that corresponds to the input element, 
                // getByLabelText: will find the label element,
                // & then find the input associated with the label,
                // id & htmlFor, will help with that.

        // getByLabelText : also works with wrapper labels.
        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument() 
        
        // there may be 2 labels (2 elements) with same label name, 
        // then we can select specific by using selector.
        const nameElement21 = screen.getByLabelText("Name", {
            selector: 'input'
        })
        expect(nameElement21).toBeInTheDocument()

        // 3. getByPlaceholderText
        const nameElement3 = screen.getByPlaceholderText("Fullname")
        expect(nameElement3).toBeInTheDocument()

        // 4. getByText
        const paragraphElement = screen.getByText("All fields are mandatory")
        expect(paragraphElement).toBeInTheDocument()
        
    }) 

})

//  PASS  src/components/Application/Application.test.tsx
//   Appliaction
//   √ renders correctly (91 ms)

// Note:
// TestingLibraryElementError: Found multiple elements with the role "textbox"
// This is bcz,
// By default both, input of type-text & a text-area is --- textbox

// Solution: "name" option

// Note:
// TestingLibraryElementError: Found multiple elements with the role "heading"        
    
// level 1 - for h1
// level 1 - for h2