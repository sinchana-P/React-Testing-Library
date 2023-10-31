// v14 - Code Coverage

import { GreetProps } from './greet.types'

const GreetThree = (props: GreetProps) => {
  return (
    <div>
      Hello {props.name ? props.name : 'Guest'}
    </div>
  )
}

export default GreetThree