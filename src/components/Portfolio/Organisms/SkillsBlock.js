import { useState } from "react";

import { PortfolioLine } from "./PortfolioLine";

const languagesArray = ["CSS3", "HTML5", "JavaScript", "Ruby", "Postgres"];

const librariesArray = ["React", "TypeScript", "jQuery", "Rails", "Tailwind CSS", "Bootstrap", "SASS"];

const otherArray = ["I18n translation", "web accessibility", "testing with Vitest"];

export const SkillsBlock = () => {
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
        <PortfolioLine topLevel lineNumber={7} low icon={icon} indent={1} attribute="skills" open bracketColor="pink" />
      </div>

      <div className={collapsed && "hidden"}>
        <PortfolioLine standardLine array={languagesArray} lineNumber={8} low indent={2} attribute="languages" />

        <PortfolioLine standardLine array={librariesArray} lineNumber={9} low indent={2} attribute="libraries" />

        <PortfolioLine standardLine array={otherArray} lineNumber={10} indent={2} attribute="other" />
      </div>

      <PortfolioLine endLevel lineNumber={11} indent={1} bracketColor="pink" endCharacter="," />
    </>
  );
};
