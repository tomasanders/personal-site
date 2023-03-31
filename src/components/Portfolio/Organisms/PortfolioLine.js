import { Attribute } from "../Atoms/Attribute";
import { Bracket } from "../Atoms/Bracket";
import { IndentBlock } from "../Atoms/IndentBlock";
import { LineArrow } from "../Atoms/LineArrow";
import { LineNumber } from "../Atoms/LineNumber";
import { StringValue } from "../Atoms/StringValue";
import { Variable } from "../Atoms/Variable";

// Returns a fully-formed portfolio block line

export const PortfolioLine = (props) => {
  // For the top-level comment line
  if (props.comment) {
    return (
      <div className="flex items-start">
        <LineNumber lineNumber={1} low />
        <LineArrow isBlank />
        <div className="flex flex-wrap">
          <p className="text-ide-comment">// Click on the arrows to expand/collapse the block!</p>
        </div>
      </div>
    );
  };

  // For the top-level of a block, with an opening bracket
  if (props.topLevel) {
    return (
      <div className="flex items-start">
        {props.low ?
          <LineNumber lineNumber={props.lineNumber} low />
          :
          <LineNumber lineNumber={props.lineNumber} />
        }

        <LineArrow icon={props.icon} />

        {props.indent && <IndentBlock indent={props.indent} />}

        {props.variable && <Variable variable={props.variable} />}

        {props.attribute && <Attribute attribute={props.attribute} />}

        <Bracket open bracketColor={props.bracketColor} />
      </div>
    );
  };

  // Returns a normal line with an attribute and text
  if (props.standardLine) {
    return (
      <div className="flex items-start">
        {props.low ?
          <LineNumber lineNumber={props.lineNumber} low />
          :
          <LineNumber lineNumber={props.lineNumber} />
        }

        <LineArrow isBlank />

        {props.indent && <IndentBlock indent={props.indent} />}

        <div className="flex flex-wrap">
          <Attribute attribute={props.attribute} />

          {props.value && <StringValue value={props.value} />}

          {/* Returns my calculated age */}
          {props.age &&
            <>
              <span className="text-ide-green">
                {Math.floor((new Date() - new Date(1985, 5, 31).getTime()) / 3.15576e+10)}
              </span>
              <span className="text-ide-text">,</span>
            </>
          }

          {/* Returns a formatted array */}
          {props.array &&
            <>
              <span className="text-ide-green">{'['}</span>
              {props.array.map(item => {
                return <StringValue value={item} />;
              })}
              <span className="text-ide-green">{']'}</span>
            </>
          }

          {/* Returns a formatted link */}
          {props.link &&
            <>
              <a href={props.url} target="_blank" className="underline text-ide-orange decoration-dotted underline-offset-2">
                Here
              </a>
              <span className="text-ide-text">,</span>
            </>
          }

        </div>
      </div>
    );
  };

  // Returns a closing bracket followed by either a semicolon or a comma
  if (props.endLevel) {
    return (
      <div className="flex items-start">
        <LineNumber lineNumber={props.lineNumber} />

        <LineArrow isBlank />

        {props.indent && <IndentBlock indent={props.indent} />}

        <Bracket bracketColor={props.bracketColor} endCharacter={props.endCharacter} />
      </div>
    );
  };
};
