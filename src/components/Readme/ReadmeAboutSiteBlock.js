import { useState } from "react";

import { ReadmeLine } from "./ReadmeLine";

export const ReadmeAboutSiteBlock = () => {
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
        <ReadmeLine lineNumber={10} icon={icon} isHeader h3 content="### About This Site" />
      </div>

      <div className={collapsed && 'hidden'}>
        <ReadmeLine lineNumber={11} isBlank content="When I made my portfolio, I thought it'd be a fun idea to sort of present myself in 'code', so I designed this site to be a somewhat faithful recreation of VSCode, which is my daily driver. I didn't want to go overboard with excess functionality, so I tried to keep things as simple and streamlined as possible, while still being fun." />
      </div>
    </>
  );
};
