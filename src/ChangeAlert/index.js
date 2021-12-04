import useStorageListener from "./useStorageListener";
import "./ChangeAlert.css";
function ChangeAlert({ synchronizeTodos }) {
  const { show, toggleShow } = useStorageListener();
  if (show) {
    return (
      <div className="ChangeAlert-container">
        <div className="ChangeAlert-container-bottom">
          <div className="inner-container">
            <h2>Your ToDo's are outdated, please refresh.</h2>
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
