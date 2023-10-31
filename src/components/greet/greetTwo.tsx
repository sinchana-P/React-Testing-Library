type GreetProps = {
    name?: string
}

const GreetTwo = (props: GreetProps) => {
  return (
    <div>
      {/* Hello Lily */}
      Hello {props.name}
    </div>
  )
}

export default GreetTwo