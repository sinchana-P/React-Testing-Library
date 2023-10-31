type GreetProps = {
    name?: string
}

const GreetThree = (props: GreetProps) => {
  return (
    <div>
      {/* Hello Lily */}
      Hello {props.name}
    </div>
  )
}

export default GreetThree