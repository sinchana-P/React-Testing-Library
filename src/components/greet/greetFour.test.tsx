// v14 - Code Coverage

import { render, screen } from "@testing-library/react"
import GreetThree from './greetTwo'
 
describe.only('Greet' , () => {
        test("Renders Correctly", ()  => {
            render(<GreetThree />)
        // const textElement = screen.getByText('Hello')
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })
})


// -------------------------------


// Output for this:
// "jest": {
//     "coverageThreshold": {
//       "global": {
//         "branches": 80,
//         "functions": 80,
//         "lines": 80,
//         "statements": -10
//       }
//     }
//   } 


// ----------------|---------|----------|---------|---------|-------------------
// File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
// ----------------|---------|----------|---------|---------|-------------------
// All files       |      75 |        0 |      75 |      75 |                   
//  greet.tsx      |     100 |      100 |     100 |     100 |                   
//  greetFour.tsx  |       0 |        0 |       0 |       0 | 5-6               
//  greetThree.tsx |     100 |      100 |     100 |     100 |                   
//  greetTwo.tsx   |     100 |      100 |     100 |     100 |                   
// ----------------|---------|----------|---------|---------|-------------------
// Jest: "global" coverage threshold for branches (80%) not met: 0%
// Jest: "global" coverage threshold for lines (80%) not met: 75%
// Jest: "global" coverage threshold for functions (80%) not met: 75%


