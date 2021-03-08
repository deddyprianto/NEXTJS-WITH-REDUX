import * as types from "../types";

export const dataFetch = () => async (dispatch) => {
  dispatch({
    type: types.DATA_LOAD,
  });
  dispatch({
    type: types.DATA_SUCC,
    payload: ["deddy", "cinta", "bunga"],
  });
};
