# with Jest

- u can either use test() or it() global methods

# jest-dom - Github



# NOTE:
- jest out of the box provides matcher functions, only for JS testing
- That does not involve a UI or the DOM,
- So, wt we do is extend the list of Jest Matchers by adding an additional package called "jest-dom"

https://github.com/testing-library/jest-dom



# list of Custom Matchers

- Installation

- Usage
With @jest/globals
With Vitest
With TypeScript
With another Jest-compatible expect

- Custom matchers
toBeDisabled
toBeEnabled
toBeEmptyDOMElement
toBeInTheDocument
toBeInvalid
toBeRequired
toBeValid
toBeVisible
toContainElement
toContainHTML
toHaveAccessibleDescription
toHaveAccessibleErrorMessage
toHaveAccessibleName
toHaveAttribute
toHaveClass
toHaveFocus
toHaveFormValues
toHaveStyle
toHaveTextContent
toHaveValue
toHaveDisplayValue
toBeChecked
toBePartiallyChecked
toHaveErrorMessage
Deprecated matchers
toBeEmpty
toBeInTheDOM
toHaveDescription


- For us "jest-dom" is installed by create-react-app itself
-     "@testing-library/jest-dom": "^5.17.0",

- check this file:
- setupTests.ts

