import { useState } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';

export const Readme = () => {
  return (
    <>
      {/* Line 1 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>1</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
        <p className="text-comment">// Click on the arrows to collapse the text!</p>
      </div>

      {/* Line 2 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>2</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
      </div>

      {/* Line 3 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>3</p>
        <div className="flex items-center pr-1 text-xl"><BiChevronDown /></div>
        <h2>## Hey There!</h2>
      </div>

      {/* Line 4 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>4</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
        <p>My name is Tom, and I'm a front-end developer. Thanks for stopping by!</p>
      </div>

      {/* Line 5 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>5</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
      </div>

      {/* Line 6 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>6</p>
        <div className="flex items-center pr-1 text-xl"><BiChevronDown /></div>
        <h3>### About Me</h3>
      </div>

      {/* Line 7 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>7</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
        <p>I'm originally from the US, but have been living in Japan for the last 7 years. I'm headed to England in August 2023, and I'm super excited about it!</p>
      </div>

      {/* Line 8 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>8</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
        <p>I'm passionate about building simple, clean, interesting user experiences. Recently, I've been learning about accessibility best-practices and dipping my toes into mobile development using React Native. When I'm not writing code, I'm usually exploring interesting places with my wife, reading a good book, or playing pc games.</p>
      </div>

      {/* Line 9 */}
      <div className="flex items-start pb-1">
        <p className="pr-1"><span className="opacity-0">0</span>9</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
      </div>

      {/* Line 10 */}
      <div className="flex items-start pb-1">
        <p className="pr-1">10</p>
        <div className="flex items-center pr-1 text-xl"><BiChevronDown /></div>
        <h3>### About This Site</h3>
      </div>

      {/* Line 11 */}
      <div className="flex items-start pb-1">
        <p className="pr-1">11</p>
        <div className="flex items-center pr-1 text-xl opacity-0"><BiChevronDown /></div>
        <p>When I made my portfolio, I thought it'd be a fun idea to sort of present myself in 'code', so I designed this site to be a somewhat faithful recreation of VSCode, which is my daily driver. I didn't want to go overboard with excess functionality, so I tried to keep things as simple and streamlined as possible, while still being fun.</p>
      </div>
    </>
  );
};
