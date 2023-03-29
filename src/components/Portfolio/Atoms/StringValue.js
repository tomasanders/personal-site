export const StringValue = (props) => {
  return (
    <>
      <p className="text-d-ide-orange">
        "{props.value}"
        <span className="text-d-ide-text">,</span>
      </p>
    </>
  )
}
