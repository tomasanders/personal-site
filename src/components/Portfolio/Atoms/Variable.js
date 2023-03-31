// Returns 'const variable = '

export const Variable = (props) => {
  return (
    <p className="text-ide-yellow">
      const&nbsp;
      <span className="text-ide-pink">{props.variable}</span>
      &nbsp;
      <span className="text-ide-text">=</span>
      &nbsp;
    </p>
  );
};
