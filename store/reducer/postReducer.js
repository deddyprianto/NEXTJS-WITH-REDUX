import * as types from "../types";
const initialState = {
  posts: [],
  post: {},
  loading: false,
  err: null,
};
function main(state = initialState, action) {
  switch (action.type) {
    case types.DATA_LOAD:
      return { loading: true };
    case types.DATA_SUCC:
      return { ...state, posts: action.payload, loading: false };
    case types.DATA_FAIL:
      return { err: action.err };
    default:
      return state;
  }
}
export default main;
