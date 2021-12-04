import useStorageListener from "./useStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({ synchronizeTodos }) {
  const { show, toggleShow } = useStorageListener(synchronizeTodos);
  if (show) {
    return (
      <div className="ChangeAlert-container">
        <div className="ChangeAlert-container-bottom">
          <div className="inner-container">
            <p>Your ToDo's are outdated, please refresh.</p>
            <button onClick={() => toggleShow(synchronizeTodos)}>
              Refresh
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ChangeAlert;
