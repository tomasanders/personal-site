import { useState } from "react";

import { SideNav } from "./SideNav";
import { SiJavascript } from 'react-icons/si';
import { RiInformationFill } from 'react-icons/ri';
import { Portfolio } from './Portfolio';
import { Readme } from './Readme';

export const Ide = () => {
  const [activeTab, setActiveTab] = useState('portfolio');

  return (
    <main className="ide-grid">
      <div className="grid row-span-1 text-lg col-span-full place-items-center bg-d-sideBg text-d-sideIcon">
        <h2>tom-sanders-portfolio</h2>
      </div>

      <SideNav />

      <ul className="flex col-start-2 row-span-1 row-start-2 bg-d-sideBg col-span-full">
        <li className={`px-4 py-1 bg-d-tabBg text-d-tabText flex gap-2 items-center border-b ${activeTab === 'portfolio' ? 'border-d-tabActive' : 'border-transparent'}`} onClick={() => setActiveTab('portfolio')}>
          <SiJavascript className="text-black" />
          portfolio.js
        </li>

        <li className={`px-4 py-1 bg-d-tabBg text-d-tabText flex gap-2 items-center border-b ${activeTab === 'readme' ? 'border-d-tabActive' : 'border-transparent'}`} onClick={() => setActiveTab('readme')}>
          <RiInformationFill className="text-blue-500" />
          README.md
        </li>
      </ul>

      <div className="col-start-2 row-start-3 p-2 overflow-scroll font-mono ide-content col-span-full row-span-full text-md text-d-text bg-d-ideBg">
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'readme' && <Readme />}
      </div>
    </main>
  );
};
