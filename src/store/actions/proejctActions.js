import { ADD_PROJECT, ADD_PROJECT_ERROR } from "../type";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;

    fireStore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorId: userId,
        authorLastName: profile.lastName,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: ADD_PROJECT,
          project
        });
      })
      .catch(err => dispatch({ type: ADD_PROJECT_ERROR, err }));
  };
};
