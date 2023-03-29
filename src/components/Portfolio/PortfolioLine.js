import { Attribute } from "./Atoms/Attribute";
import { StringValue } from "./Atoms/StringValue";
import { Bracket } from "./Atoms/Bracket";

const birthday = new Date(1985, 5, 31);





export const PortfolioLine = (props) => {
  if (props.regular) {
    return (
      <div className="flex">
        <Attribute attribute={props.attribute} />
        <StringValue value={props.value} />
      </div>
    );
  };

  if (props.age) {
    return (
      <div className="flex">
        <Attribute attribute="age" />
        <span className="text-d-ide-green">
          {Math.floor((new Date() - new Date(birthday).getTime()) / 3.15576e+10)}
        </span>
        <span className="text-d-ide-text">,</span>
      </div>
    );
  };

  if (props.topLevel) {
    return (
      <div className="flex">
        <Attribute attribute={props.attribute} />
        <Bracket open bracketColor={props.bracketColor} />
      </div>
    );
  };

  if (props.link) {
    return (
      <div className="flex">
        <Attribute attribute="link" />
        <a href={props.href} target="_blank" className="ml-2 underline text-d-ide-orange decoration-dotted underline-offset-2">{props.value}</a>
      </div>
    );
  };

  if (props.endLevel) {
    return (
      <div className="flex">
        <Bracket bracketColor={props.bracketColor} endCharacter={props.endCharacter} />
      </div>
    );
  };

  if (props.languages) {
    return (
      <div className="flex">
        <Attribute attribute="languages" />
        <p className="flex flex-wrap text-d-ide-orange">
          <span className="text-d-ide-green">{'['}</span>
          "CSS3"
          <span className="mr-2 text-d-ide">,</span>
          "HTML5"
          <span className="mr-2 text-d-ide">,</span>
          "JavaScript"
          <span className="mr-2 text-d-ide">,</span>
          "Ruby"
          <span className="mr-2 text-d-ide">,</span>
          "Postgres"
          <span className="text-d-ide-green">{']'}</span>
          <span className="text-d-ide-text">,</span>
        </p>
      </div>
    );
  };

  if (props.libraries) {
    return (
      <div className="flex">
        <Attribute attribute="libraries" />
        <p className="text-d-ide-orange flex-flex-wrap">
          <span className="text-d-ide-green">{'['}</span>
          "React"
          <span className="mr-2 text-d-ide">,</span>
          "TypeScript"
          <span className="mr-2 text-d-ide">,</span>
          "jQuery"
          <span className="mr-2 text-d-ide">,</span>
          "Rails"
          <span className="mr-2 text-d-ide">,</span>
          "Tailwind CSS"
          <span className="mr-2 text-d-ide">,</span>
          "Bootstrap"
          <span className="mr-2 text-d-ide">,</span>
          "SASS"
          <span className="text-d-ide-green">{']'}</span>
          <span className="text-d-ide-text">,</span>
        </p>
      </div>
    );
  };

  if (props.other) {
    return (
      <div className="flex">
        <Attribute attribute="other" />
        <p className="flex flex-wrap text-d-ide-orange">
          <span className="text-d-ide-green">{'['}</span>
          "I18n internationalization"
          <span className="mr-2 text-d-ide">,</span>
          "web accessibility"
          <span className="mr-2 text-d-ide">,</span>
          "testing with Vitest"
          <span className="text-d-ide-green">{']'}</span>
          <span className="text-d-ide-text">,</span>
        </p>
      </div>
    );
  };
};
