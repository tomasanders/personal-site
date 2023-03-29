import { BiChevronDown, BiChevronRight } from "react-icons/bi";

export const LineArrow = (props) => {
  return (
    <div className={`flex items-center pr-1 text-xl ${props.isBlank && 'opacity-0'}`}>
      {props.icon === 'down' ? <BiChevronDown /> : <BiChevronRight />}
    </div>
  );
};
