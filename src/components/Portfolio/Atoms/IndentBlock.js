// Creates an indent of 2/4/6 spaces

export const IndentBlock = (props) => {
  if (props.indent === 1) {
    return <div className="h-full">&nbsp;&nbsp;</div>;
  };

  if (props.indent === 2) {
    return (
      <>
        <div className="h-full ">&nbsp;&nbsp;</div>
        <div className="h-full">&nbsp;&nbsp;</div>
      </>
    );
  };

  if (props.indent === 3) {
    return (
      <>
        <div className="h-full">&nbsp;&nbsp;</div>
        <div className="h-full">&nbsp;&nbsp;</div>
        <div className="h-full">&nbsp;&nbsp;</div>
      </>
    );
  };
};
