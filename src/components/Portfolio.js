import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { IndentBlock } from "./Portfolio/IndentBlock";
import { LineArrow } from "./Portfolio/LineArrow";
import { LineNumber } from "./Portfolio/LineNumber";
import { PortfolioLine } from "./Portfolio/PortfolioLine";

export const Portfolio = () => {
  return (
    <>
      <div className="flex items-start">
        <LineNumber lineNumber={1} low />
        <LineArrow icon="down" />

        <div className="flex gap-2">
          <p className="text-d-ide-yellow">const</p>
          <p className="text-d-ide-pink">Tom</p>
          <p className="text-d-ide-text">=</p>
          <p className="text-d-ide-yellow">{'{'}</p>
        </div>
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={2} low />
        <LineArrow isBlank />
        <IndentBlock indent={1} />
        <PortfolioLine regular attribute="name" value="Tom Sanders" />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={3} low />
        <LineArrow isBlank />
        <IndentBlock indent={1} />
        <PortfolioLine age />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={4} low />
        <LineArrow isBlank />
        <IndentBlock indent={1} />
        <PortfolioLine regular attribute="location" value="Tokyo, Japan" />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={5} low />
        <LineArrow isBlank />
        <IndentBlock indent={1} />
        <PortfolioLine regular attribute="nextLocation" value="Brighton, England" />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={6} low />
        <LineArrow isBlank />
        <IndentBlock indent={1} />
        <PortfolioLine topLevel attribute="skills" bracketColor="pink" />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={7} low />
        <LineArrow isBlank />
        <IndentBlock indent={2} />
        <PortfolioLine languages />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={8} low />
        <LineArrow isBlank />
        <IndentBlock indent={2} />
        <PortfolioLine libraries />
      </div>

      <div className="flex items-start">
        <LineNumber lineNumber={9} low />
        <LineArrow isBlank />
        <IndentBlock indent={2} />
        <PortfolioLine other />
      </div>



      <div className="flex items-start"><LineNumber lineNumber={10}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={11}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={12}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={13}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={14}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={15}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={16}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={17}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={18}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={19}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={20}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={21}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={22}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={23}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={24}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={25}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={26}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={27}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={28}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={29}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={30}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={31}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={32}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={33}  /><LineArrow isBlank /></div>
      <div className="flex items-start"><LineNumber lineNumber={34}  /><LineArrow isBlank /></div>
    </>
  );
};
