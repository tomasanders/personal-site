export const Bracket = (props) => {
  return (
    <>
      <p className={`text-d-ide-${props.bracketColor}`}>
        {props.open ? '{' : '}'}
      </p>
      {props.endCharacter && <span className="text-d-ide-text">{props.endCharacter}</span>}
    </>
  );
};
