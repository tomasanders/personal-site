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
      <div className="grid col-span-full row-span-1 place-items-center bg-sideBg text-sideIcon text-lg">
        <h2>tom-sanders-portfolio</h2>
      </div>

      <SideNav />

      <ul className="bg-sideBg flex col-start-2 col-span-full row-start-2 row-span-1">
        <li className={`px-4 py-1 bg-tabBg text-tabText flex gap-2 items-center border-b ${activeTab === 'portfolio' ? 'border-tabActive' : 'border-transparent'}`} onClick={() => setActiveTab('portfolio')}>
          <SiJavascript className="text-black" />
          portfolio.js
        </li>

        <li className={`px-4 py-1 bg-tabBg text-tabText flex gap-2 items-center border-b ${activeTab === 'readme' ? 'border-tabActive' : 'border-transparent'}`} onClick={() => setActiveTab('readme')}>
          <RiInformationFill className="text-blue-500" />
          README.md
        </li>
      </ul>

      <div className="overflow-y-scroll col-start-2 col-span-full row-start-3 row-span-full">
        {activeTab === 'portfolio' && <Portfolio />}
        {activeTab === 'readme' && <Readme />}
      </div>
    </main>
  );
};
