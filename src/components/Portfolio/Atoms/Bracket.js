// Returns an opening or closing bracket followed by a semicolon or comma

export const Bracket = (props) => {
  return (
    <p className={`text-ide-${props.bracketColor}`}>
      {props.open ? '{' : '}'}
      {props.endCharacter && <span className="text-ide-text">{props.endCharacter}</span>}
    </p>
  );
};
