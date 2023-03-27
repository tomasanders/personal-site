import { IoDocumentTextOutline } from 'react-icons/io5';
import { VscGithubAlt } from 'react-icons/vsc';
import { SlSocialLinkedin } from 'react-icons/sl';
import { BsChatLeftDots } from 'react-icons/bs';
import { LineNumber } from './LineNumber';

export const Readme = () => {
  return (
    <div className="flex flex-col bg-ideBg py-3">
      <div className="flex items-start">
        <LineNumber number={1} arrow />
        <h2>## Hey There!</h2>
      </div>
      <div className="flex items-start">
        <LineNumber number={2} />
      </div>
      <div className="flex items-start">
        <LineNumber number={3} />
        <p>My name is Tom, and I'm a front-end developer. Thanks for stopping by!</p>
      </div>
      <div className="flex items-start">
        <LineNumber number={4} />
      </div>
      <div className="flex items-start">
        <LineNumber number={5} arrow />
        <h3>### About Me</h3>
      </div>
      <div className="flex items-start">
        <LineNumber number={6} />
        <p>I'm originally from the US, but have been living in Japan for the last 7 years. I'm headed to England in August 2023, and I'm super excited about it!</p>
      </div>
      <div className="flex items-start">
        <LineNumber number={7} />
      </div>
      <div className="flex items-start">
        <LineNumber number={8} />
        <p>I'm passionate about building simple, clean, interesting user experiences. Recently, I've been learning about accessibility best-practices and dipping my toes into mobile development using React Native. When I'm not writing code, I'm usually exploring interesting places with my wife, reading a good book, or playing pc games.</p>
      </div>
      <div className="flex items-start">
        <LineNumber number={9} />
      </div>
      <div className="flex items-start">
        <LineNumber number={10} arrow />
        <h3>### About This Site</h3>
      </div>
      <div className="flex items-start">
        <LineNumber number={11} />
      </div>
      <div className="flex items-start">
        <LineNumber number={12} />
        <p>- Click the '<BsChatLeftDots />' to open the contact form.</p>
      </div>
      <div className="flex items-start">
        <LineNumber number={13} />
        <p>- Click the '<IoDocumentTextOutline />' to view my HTML resume (opens in a new window).</p>
      </div>
      <div className="flex items-start">
        <LineNumber number={14} />
        <p>- Links to my GitHub (<VscGithubAlt />) and LinkedIn (<SlSocialLinkedin />) are to the side as well!</p>
      </div>
      <div className="flex items-start">
        <LineNumber number={15} />
      </div>
      <div className="flex items-start">
        <LineNumber number={16} />
        <p>When I made my portfolio, I thought it'd be a fun idea to sort of present myself in 'code', so I designed this site to be a somewhat faithful recreation of VSCode, which is my daily driver. I didn't want to go overboard with excess functionality, so I tried to keep things as simple and streamlined as possible, while still being fun.</p>
      </div>
    </div>
  );
};
