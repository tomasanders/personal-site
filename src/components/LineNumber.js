import { BiChevronDown } from 'react-icons/bi';

export const LineNumber = (props) => {
  return (
    <div className="flex items-center px-3">
      <p className="text-md text-ideText font-mono">
        {props.number < 10 && <span className="opacity-0">0</span>}
        {props.number}
      </p>
      <span className="w-5">
        {props.arrow && <BiChevronDown />}
      </span>
    </div>
  );
};
