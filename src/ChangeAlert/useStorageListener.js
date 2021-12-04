import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function useStorageListener() {
  const [storageChange, setStorageChange] = useState(false);

  useEffect(() => {
    const onChange = (change) => {
      if (change.key === "TODOS_V1") {
        setStorageChange(true);
      }
    };
    window.addEventListener("storage", onChange);

    return () => {
      window.removeEventListener("storage", onchange);
    };
  }, []);

  const toggleShow = (synchronize) => {
    synchronize();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow: toggleShow,
  };
}

export default useStorageListener;
