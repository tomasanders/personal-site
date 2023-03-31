// Returns '"value",'

export const StringValue = (props) => {
  return (
    <p className="text-ide-orange">
      "{props.value}"
      <span className="text-ide-text">,</span>
    </p>
  );
};
