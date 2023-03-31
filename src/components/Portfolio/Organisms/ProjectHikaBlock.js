import { useState } from "react";

import { PortfolioLine } from "./PortfolioLine";

export const ProjectHikaBlock = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [icon, setIcon] = useState("right");

  const toggleCollapsed = () => {
    if (collapsed) {
      setCollapsed(false);
      setIcon("down");
    } else {
      setCollapsed(true);
      setIcon("right");
    };
  };

  return (
    <>
      <div onClick={toggleCollapsed}>
        <PortfolioLine topLevel lineNumber={20} icon={icon} indent={2} attribute="hiKaQuiz" open bracketColor="green" />
      </div>

      <div className={collapsed && "hidden"}>
        <PortfolioLine standardLine lineNumber={21} indent={3} attribute="name" value="HiKa Quiz" />

        <PortfolioLine standardLine lineNumber={22} indent={3} attribute="type" value="personal project" />

        <PortfolioLine standardLine lineNumber={23} indent={3} attribute="description" value="a flashcard-style hiragana and katakana quiz" />

        <PortfolioLine standardLine link lineNumber={24} indent={3} attribute="link" url="https://www.github.com/tomasanders/hikaquiz" />

        <PortfolioLine standardLine lineNumber={25} indent={3} attribute="tech" value="Next.js, React, TypeScript, SASS" />
      </div>

      <PortfolioLine endLevel lineNumber={26} indent={2} bracketColor="green" endCharacter="," />
    </>
  );
};
