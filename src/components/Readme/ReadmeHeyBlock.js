import { useState } from "react";

import { ReadmeLine } from "./ReadmeLine";

export const ReadmeHeyBlock = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [icon, setIcon] = useState('right');

  const toggleCollapsed = () => {
    if (collapsed) {
      setCollapsed(false);
      setIcon('down');
    } else {
      setCollapsed(true);
      setIcon('right');
    };
  };

  return (
    <>
      <div onClick={toggleCollapsed}>
        <ReadmeLine lineNumber={3} low icon={icon} isHeader h2 content="## Hey There!" />
      </div>

      <div className={collapsed && 'hidden'}>
        <ReadmeLine lineNumber={4} low isBlank content="My name is Tom, and I'm a front-end developer. Thanks for stopping by" />
      </div>
    </>
  );
};
