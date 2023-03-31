import { BiChevronDown, BiChevronRight } from "react-icons/bi";

// Returns a single line from the readme

export const ReadmeLine = (props) => {
  return (
    <div className="flex items-start pb-1">
      <p className="pr-1">
        {props.low && <span className="opacity-0">0</span>}
        {props.lineNumber}
      </p>

      <div className={`flex items-center pr-1 text-xl ${props.isBlank && 'opacity-0'}`}>
        {props.icon === 'down' ? <BiChevronDown /> : <BiChevronRight />}
      </div>

      {props.content &&
        (props.isHeader ?
          (props.h2 ?
            <h2 className="text-ide-pink">{props.content}</h2>
            :
            <h3 className="text-ide-pink">{props.content}</h3>
          )
          :
          <p className={props.isComment ? 'text-ide-comment' : 'text-ide-orange'}>{props.content}</p>
        )
      }
    </div>
  );
};
