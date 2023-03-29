import { ReadmeLine } from "./ReadmeLine";
import { useState } from "react";

export const ReadmeBlock = () => {
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
    <div onClick={toggleCollapsed}>
      <ReadmeLine lineNumber={1} icon={icon} isHeader h2 content='## Test Parent' />

      <div className={collapsed && 'hidden'}>
        <ReadmeLine lineNumber={2} isBlank content='Child Line' />
      </div>
    </div>
  );
};
