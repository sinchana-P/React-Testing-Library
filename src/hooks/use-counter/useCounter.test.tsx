import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  test('1. should render the initial count', () => {
    // render(useCounter)
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })
  // render(useCounter) : Typescript throws an error, coz
  // note: Custom Hook does not return any JSX
  // Also a hook can not be called outside a function component
  // Solution: renderHook 
  // But unlike a regular component, which can be asserted using screen,
  // Hooks do not have any DOM elements
  // Instead renderHook wrap the hook in a function component,
  // Invoke the hook & returns an object,
  // From which we can destructure aa property called "result".
  // on this result, there exist a property called "current",
  // Which will contain all the "return" values from hook

  test('2. should accept and render the same initial count', () => {
    // To pass in a prop to useCount, by specifying 2nd argument: "options" object
    // we specify an object, bcz: our counter props is an object
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    })
    expect(result.current.count).toBe(10)
  })


})

// Summary:
// For testing react hooks, we do not rely on screen & render from testing - library
// Instead we rely on render hook which returns a result,
//  which in turn contains a current property,
// that has all the returned values of the custom hook.

// And if u have to invoke the hook with props u can pass in an options object
// to render with a hook with a key called initial props.