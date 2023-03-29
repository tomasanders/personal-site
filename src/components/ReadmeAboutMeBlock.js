import { ReadmeLine } from "./ReadmeLine";
import { useState } from "react";

export const ReadmeAboutMeBlock = () => {
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
      <ReadmeLine lineNumber={6} icon={icon} isHeader h3 content="### About Me" />

      <div className={collapsed && 'hidden'}>
        <ReadmeLine lineNumber={7} isBlank content="I'm originally from the US, but have been living in Japan for the last 7 years. I'm headed to England in August 2023, and I'm super excited about it!" />
      </div>

      <div className={collapsed && 'hidden'}>
        <ReadmeLine lineNumber={8} isBlank content="I'm passionate about building simple, clean, interesting user experiences. Recently, I've been learning about accessibility best-practices and dipping my toes into mobile development using React Native. When I'm not writing code, I'm usually exploring interesting places with my wife, reading a good book, or playing pc games." />
      </div>
    </div>
  );
};
