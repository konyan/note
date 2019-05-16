import { SIGN_IN_USER, SIGN_IN_USER_ERROR, SIGN_OUT } from "../type";

export const signIn = crediential => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(crediential.email, crediential.password)
      .then(() => {
        dispatch({
          type: SIGN_IN_USER
        });
      })
      .catch(err => dispatch({ type: SIGN_IN_USER_ERROR, err }));
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: SIGN_OUT }))
      .catch();
  };
};
