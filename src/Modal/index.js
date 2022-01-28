import ReactDOM from "react-dom";
import { StyledModal } from "./styles";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <StyledModal>{children}</StyledModal>,
    document.getElementById("modal")
  );
}
export default Modal;
