import { FaCheck, FaCalendarCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

function IconComponent({ type }) {
  if (type === "check") {
    return <FaCheck />;
  } else if (type === "delete") {
    return <AiFillDelete />;
  } else if (type === "main-icon") {
    return <FaCalendarCheck />;
  } else {
    return "";
  }
}
export default IconComponent;
