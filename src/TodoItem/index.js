import "./TodoItem.css";
import IconComponent from "../IconComponent";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <IconComponent type="check" />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <IconComponent type="delete" />
      </span>
    </li>
  );
}
export default TodoItem;
