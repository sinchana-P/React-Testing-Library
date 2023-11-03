import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
    const skills = ["HTML", "CSS", "JavaScript"]

    test("Renders Correctly", () => {
        render(<Skills skills={skills}/>)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('renders a list of skills', () => {
        render(<Skills skills={skills} />)
        const listElements = screen.getAllByRole('listitem')
        // expect(listElements).toHaveLength(3)
        expect(listElements).toHaveLength(skills.length)
    })

    test('Render Login Button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    // for login button & start learning button
    test('Start Learning button is not rendered', () => {
        render(<Skills skills={skills} />)
        // const startLearning = screen.getByRole('button', {
        //     name: "Start Learning"
        // })

        const startLearningButton = screen.queryByRole('button', {
            name: "Start Learning"
        })
        expect(startLearningButton).not.toBeInTheDocument()

        // To fix this, use queryBy
        //   ● Skills › Start Learning button is not rendered                   
                                                                     
        // TestingLibraryElementError: Unable to find an accessible element with the role "button" and name "Start Learning"                     
    })

    // for Start Learning button, having setTimeout
    test('Start learning button is eventually displayed', async() => {
        render(<Skills skills={skills}/>);
        const startlearningButton = await screen.findByRole(
            'button', 
        {
            name: "Start Learning",
        },{
            timeout: 2000
        })
        expect(startlearningButton).toBeInTheDocument()
    })

    // Debugging: 
    // screen.debug(): using this we r being able to visualize the dom at any given point in the test (is helpful in debugging)
        // for Start Learning button, having setTimeout
        test('Start learning button is eventually displayed using Debugging', async() => {
            render(<Skills skills={skills}/>);
            screen.debug()
            const startlearningButton = await screen.findByRole(
                'button', 
            {
                name: "Start Learning",
            },{
                timeout: 2000
            })
            screen.debug()
            expect(startlearningButton).toBeInTheDocument()
        })

        // o/p:
    //     console.log
    //     <body>
    //       <div>
    //         <ul>
    //           <li>
    //             HTML
    //           </li>
    //           <li>
    //             CSS
    //           </li>
    //           <li>
    //             JavaScript
    //           </li>
    //         </ul>
    //         <ul>
    //           <button>
    //             Login
    //           </button>
    //         </ul>
    //       </div>
    //     </body>
        
    //   console.log
    //     <body>
    //       <div>
    //         <ul>
    //           <li>
    //             HTML
    //           </li>
    //           <li>
    //             CSS
    //           </li>
    //           <li>
    //             JavaScript
    //           </li>
    //         </ul>
    //         <ul>
    //           <button>
    //             Start Learning
    //           </button>
    //         </ul>
    //       </div>
    //     </body>

        test('Start learning button is eventually displayed using logRoles', async() => {
            const view = render(<Skills skills={skills}/>);
            logRoles(view.container)
            
            const startlearningButton = await screen.findByRole(
                'button', 
            {
                name: "Start Learning",
            },{
                timeout: 2000
            })
            expect(startlearningButton).toBeInTheDocument()
        })

        // o/p:
        // console.log
        // list:
    
        // Name "":
        // <ul />
    
        // --------------------------------------------------
        // listitem:
    
        // Name "":
        // <li />
    
        // Name "":
        // <li />
    
        // Name "":
        // <li />
    
        // --------------------------------------------------
        // button:
    
        // Name "Login":
        // <button />

        

})
