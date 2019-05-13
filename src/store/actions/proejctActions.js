import { ADD_PROJECT } from "../type";

export const createProject = project => {
  return (dispatch, getState) => {
    dispatch({
      type: ADD_PROJECT,
      project
    });
  };
};
