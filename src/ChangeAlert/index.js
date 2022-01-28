import useStorageListener from "./useStorageListener";
import {
  ChangeAlertContainer,
  ChangeAlertContainerBottom,
  InnerContainer,
  InnerContainerButton,
} from "./styles";

function ChangeAlert({ synchronizeTodos }) {
  const { show, toggleShow } = useStorageListener(synchronizeTodos);
  if (show) {
    return (
      <ChangeAlertContainer>
        <ChangeAlertContainerBottom>
          <InnerContainer>
            <h2>Your ToDo's are outdated, please refresh.</h2>
            <InnerContainerButton onClick={() => toggleShow()}>
              Refresh
            </InnerContainerButton>
          </InnerContainer>
        </ChangeAlertContainerBottom>
      </ChangeAlertContainer>
    );
  } else {
    return null;
  }
}

export default ChangeAlert;
