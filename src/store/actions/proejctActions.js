import { ADD_PROJECT, ADD_PROJECT_ERROR } from "../type";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("projects")
      .add({
        ...project,
        authFirstName: "Nyan",
        authorId: 123456,
        authorLastName: "Lin",
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
