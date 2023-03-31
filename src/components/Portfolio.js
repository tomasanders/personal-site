import { useState } from "react";

import { PortfolioLine } from "./Portfolio/Organisms/PortfolioLine";
import { ProjectsBlock } from "./Portfolio/Organisms/ProjectsBlock";
import { SkillsBlock } from "./Portfolio/Organisms/SkillsBlock";

const dots = <span className="text-xs tracking-tighter text-ide-gray">...</span>;

export const Portfolio = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [icon, setIcon] = useState("down");

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
      <PortfolioLine comment />

      <div className="flex" onClick={toggleCollapsed}>
        <PortfolioLine topLevel lineNumber={2} low icon={icon} variable="Tom" open bracketColor="yellow" />
        {collapsed && dots}
      </div>

      <div className={collapsed && "hidden"}>
        <PortfolioLine standardLine lineNumber={3} low indent={1} attribute="name" value="Tom Sanders" />

        <PortfolioLine standardLine age lineNumber={4} low indent={1} attribute="age" />

        <PortfolioLine standardLine lineNumber={5} low indent={1} attribute="location" value="Tokyo, Japan" />

        <PortfolioLine standardLine lineNumber={6} low indent={1} attribute="nextLocation" value="Brighton, England" />

        <SkillsBlock />
        <ProjectsBlock />
      </div>

      <PortfolioLine endLevel lineNumber={35} bracketColor="yellow" endCharacter=";" />
    </>
  );
};
