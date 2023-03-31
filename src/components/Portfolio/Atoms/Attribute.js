// Returns 'attribute: '

export const Attribute = (props) => {
  return (
    <p className="text-ide-teal">
      {props.attribute}
      <span className="text-ide-text">:</span>
      &nbsp;
    </p>
  );
};
