import { useState } from "react";

import { PortfolioLine } from "./PortfolioLine";

const dots = <span className="text-xs tracking-tighter text-ide-gray">...</span>;

export const ProjectPortfolioBlock = () => {
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
        <PortfolioLine topLevel lineNumber={13} icon={icon} indent={2} attribute="portfolioSite" open bracketColor="green" />
        {collapsed && dots}
      </div>

      <div className={collapsed && "hidden"}>
        <PortfolioLine standardLine lineNumber={14} indent={3} attribute="name" value="portfolio" />

        <PortfolioLine standardLine lineNumber={15} indent={3} attribute="type" value="personal website" />

        <PortfolioLine standardLine lineNumber={16} indent={3} attribute="description" value="a fun way to advertise myself" />

        <PortfolioLine standardLine link url="https://tom-sanders.dev" lineNumber={17} indent={3} attribute="link" />

        <PortfolioLine standardLine lineNumber={18} indent={3} attribute="tech" value="Next.js, React, Tailwind CSS" />
      </div>

      <PortfolioLine endLevel lineNumber={19} indent={2} bracketColor="green" endCharacter="," />
    </>
  );
};
