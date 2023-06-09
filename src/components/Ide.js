import { useState } from "react";

import { Portfolio } from './Portfolio';
import { Readme } from './Readme';
import { SideNav } from "./SideNav";

import { RiInformationFill } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';

export const Ide = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <main className="ide-grid">
      <div className="grid row-span-1 text-lg col-span-full place-items-center bg-sideBg text-sideIcon">
        <h1>tom-sanders-portfolio</h1>
      </div>

      <SideNav />

      <ul className="flex col-start-2 row-span-1 row-start-2 bg-sideBg col-span-full">
        <li className={`px-4 py-1 bg-tabBg text-tabText flex gap-2 items-center border-b ${activeTab === 'portfolio' ? 'border-tabActive text-ide-comment' : 'border-transparent'}`} onClick={() => setActiveTab('portfolio')}>
          <SiJavascript className="text-ide-yellow" />
          portfolio.js
        </li>

        <li className={`px-4 py-1 bg-tabBg text-tabText flex gap-2 items-center border-b ${activeTab === 'readme' ? 'border-tabActive text-ide-comment' : 'border-transparent'}`} onClick={() => setActiveTab('readme')}>
          <RiInformationFill className="text-blue-400" />
          README.md
        </li>
      </ul>

      <div className="col-start-2 row-start-3 p-2 overflow-scroll font-mono ide-content col-span-full row-span-full text-md text-ide-gray bg-ideBg">
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'readme' && <Readme />}
      </div>
    </main>
  );
};
