import React from "react";
import axios from "axios";

const actionTypes = {
  ON_LOADING: "ON_LOADING",
  ON_SUCCESS: "ON_SUCCESS",
  ON_ERROR: "ON_ERROR",
};

function asyncReducer(prevState, action) {
  switch (action.type) {
    case actionTypes.ON_LOADING:
      return {
        ...prevState,
        status: "loading",
      };
    case actionTypes.ON_SUCCESS:
      return {
        ...prevState,
        status: "success",
        data: action.payload.data,
      };
    case actionTypes.ON_ERROR:
      return {
        ...prevState,
        status: "error",
        error: action.payload.error,
      };
    default:
      throw new Error("action not defined");
  }
}

export const useAsync = (initialUrl, initialData) => {
  const [url, setUrl] = React.useState(initialUrl);
  const [state, dispatch] = React.useReducer(asyncReducer, {
    data: initialData,
    error: null,
    status: "idle",
    url: initialUrl
  });

  React.useEffect(() => {
    dispatch({ type: actionTypes.ON_LOADING });
    axios(url).then(
      (data) => {
        dispatch({
          type: actionTypes.ON_SUCCESS,
          payload: { data: data.data },
        });
      },
      (error) => {
        dispatch({ type: actionTypes.ON_ERROR, payload: { error } });
      }
    );
  }, [url]);

  return [state, setUrl];
};
