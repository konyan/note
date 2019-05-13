import { SIGN_IN_USER, SIGN_IN_USER_ERROR } from "../type";

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      console.log("LOGIN SUCCESS");

      return { ...state, authError: null };
    case SIGN_IN_USER_ERROR:
      console.log("LOGIN ERROR");
      return { ...state, authError: action.err };
    default:
      return state;
  }
};

export default authReducer;
