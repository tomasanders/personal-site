import { useState } from "react";

import { PortfolioLine } from "./PortfolioLine";

const dots = <span className="text-xs tracking-tighter text-ide-gray">...</span>;

export const ProjectBunproBlock = () => {
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
      <div className="flex" onClick={toggleCollapsed}>
        <PortfolioLine topLevel lineNumber={27} icon={icon} indent={2} attribute="bunproSrs" open bracketColor="green" />
        {collapsed && dots}
      </div>

      <div className={collapsed && "hidden"}>
        <PortfolioLine standardLine lineNumber={28} indent={3} attribute="name" value="Bunpro SRS" />

        <PortfolioLine standardLine lineNumber={29} indent={3} attribute="type" value="professional work" />

        <PortfolioLine standardLine lineNumber={30} indent={3} attribute="description" value="a comprehensive japanese language learning tool that makes learning simple and efficient" />

        <PortfolioLine standardLine link lineNumber={31} indent={3} attribute="link" url="https://www.bunpro.jp" />

        <PortfolioLine standardLine lineNumber={32} indent={3} attribute="tech" value="Ruby, React, jQuery, Rails, SASS, Tailwind CSS" />
      </div>

      <PortfolioLine endLevel lineNumber={33} indent={2} bracketColor="green" endCharacter="," />
    </>
  );
};
