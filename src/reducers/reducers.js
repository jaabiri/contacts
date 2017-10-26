import {


  GET_USERS
} from "../actions/action";

const DEFAULT_STATE = {
  Users: {},
};

const setUsers = (state, action) => {
  const newState = [];
  Object.assign(newState, state, { Users: action.response });
  return newState;
};


const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      console.log("action", action);
      return setUsers(state, action);
    default:
      return state;
  }
};

export default rootReducer;