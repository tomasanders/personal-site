// Returns the line number with an optional blank '0' if the number is low

export const LineNumber = (props) => {
  return (
    <div className="flex text-right">
      <p className="pr-1">
        {props.low && <span className="opacity-0">0</span>}
        {props.lineNumber}
      </p>
    </div>
  );
};
