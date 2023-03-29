export const IndentBlock = (props) => {
  if (props.indent === 1) {
    return (
      <div className="h-full border-l border-d-ide-yellow">
        <p className="opacity-0">00</p>
      </div>
    );
  };

  if (props.indent === 2) {
    return (
      <>
        <div className="h-full border-l border-d-ide-yellow">
          <p className="opacity-0">00</p>
        </div>
        <div className="h-full border-l border-d-ide-pink">
          <p className="opacity-0">00</p>
        </div>
      </>
    );
  };

  if (props.indent === 3) {
    return (
      <>
        <div className="h-full border-l border-d-ide-yellow">
          <p className="opacity-0">00</p>
        </div>
        <div className="h-full border-l border-d-ide-pink">
          <p className="opacity-0">00</p>
        </div>
        <div className="h-full border-l border-d-ide-teal">
          <p className="opacity-0">00</p>
        </div>
      </>
    );
  };
};
