import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { synchronizedItem, loading, error, item } = state;

  //Action Creators
  const onError = (error) => {
    dispatch({ type: actionTypes.error, payload: error });
  };
  const onSuccess = (item) => {
    dispatch({ type: actionTypes.success, payload: item });
  };
  const onSave = (item) => {
    dispatch({ type: actionTypes.save, payload: item });
  };
  const onSynchronize = () => {
    dispatch({ type: actionTypes.synchronize });
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [synchronizedItem]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const synchronizeItem = () => {
    onSynchronize();
  };

  return { item, saveItem, loading, error, synchronizeItem };
}

const initialState = ({ initialValue }) => ({
  synchronizedItem: true,
  loading: true,
  error: false,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  synchronize: "SYNCHRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true },
  [actionTypes.success]: {
    ...state,
    loading: false,
    synchronizedItem: true,
    error: false,
    item: payload,
  },
  [actionTypes.save]: { ...state, item: payload },
  [actionTypes.synchronize]: {
    ...state,
    loading: true,
    synchronizedItem: false,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export default useLocalStorage;
