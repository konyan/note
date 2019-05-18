import {
  SIGN_IN_USER,
  SIGN_IN_USER_ERROR,
  SIGN_OUT,
  SING_UP_SUCCESS,
  SING_UP_SUCCESS_ERROR
} from "../type";

const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_IN_USER:
      return { ...state, authError: null };
    case SIGN_IN_USER_ERROR:
      return { ...state, authError: action.err };
    case SIGN_OUT:
      return state;
    case SING_UP_SUCCESS:
      return { ...state, authError: null };
    case SING_UP_SUCCESS_ERROR:
      return { ...state, authError: action.err };
    default:
      return state;
  }
};

export default authReducer;
