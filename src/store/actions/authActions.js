import {
  SIGN_IN_USER,
  SIGN_IN_USER_ERROR,
  SIGN_OUT,
  SING_UP_SUCCESS,
  SING_UP_SUCCESS_ERROR
} from "../type";

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

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: SING_UP_SUCCESS });
      })
      .catch(err => dispatch({ type: SING_UP_SUCCESS_ERROR, err }));
  };
};
