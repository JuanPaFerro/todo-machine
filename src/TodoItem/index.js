import {
  Item,
  Text,
  TextComplete,
  IconCheck,
  IconActive,
  IconDelete,
} from "./styles";

import IconComponent from "../IconComponent";
function TodoItem(props) {
  return (
    <Item>
      {(props.completed && (
        <IconActive onClick={props.onComplete}>
          <IconComponent type="check" />
        </IconActive>
      )) || (
        <IconCheck onClick={props.onComplete}>
          <IconComponent type="check" />
        </IconCheck>
      )}

      {(props.completed && <TextComplete>{props.text}</TextComplete>) || (
        <Text>{props.text}</Text>
      )}

      <IconDelete onClick={props.onDelete}>
        <IconComponent type="delete" />
      </IconDelete>
    </Item>
  );
}
export default TodoItem;
