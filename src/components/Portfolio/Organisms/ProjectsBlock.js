import { useState } from "react";

import { PortfolioLine } from "./PortfolioLine";

import { ProjectBunproBlock } from "./ProjectBunproBlock";
import { ProjectHikaBlock } from "./ProjectHikaBlock";
import { ProjectPortfolioBlock } from "./ProjectPortfolioBlock";

export const ProjectsBlock = () => {
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
        <PortfolioLine topLevel lineNumber={12} icon={icon} indent={1} attribute="projects" open bracketColor="pink" />
      </div>

      <div className={collapsed && "hidden"}>
        <ProjectPortfolioBlock />

        <ProjectHikaBlock />

        <ProjectBunproBlock />
      </div>

      <PortfolioLine endLevel lineNumber={34} indent={1} bracketColor="pink" endCharacter="," />
    </>
  );
};
