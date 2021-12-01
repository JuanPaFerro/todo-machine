import { FaCheck, FaCalendarCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdSearchOff } from "react-icons/md";
import { VscNewFile } from "react-icons/vsc";

function IconComponent({ type }) {
  if (type === "check") {
    return <FaCheck />;
  } else if (type === "delete") {
    return <AiFillDelete />;
  } else if (type === "main-icon") {
    return <FaCalendarCheck />;
  } else if (type === "search-off") {
    return <MdSearchOff />;
  } else if(type=== "new-icon"){
    return <VscNewFile/>
  }else {
    return "";
  }
}
export default IconComponent;
