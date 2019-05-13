import { ADD_PROJECT, ADD_PROJECT_ERROR } from "../type";

const initState = {
  projects: [
    { id: 1, title: "Nyan Lin Tun 1", content: "bla bla bla" },
    { id: 2, title: "Nyan Lin Tun 1", content: "bla bla bla" },
    { id: 3, title: "Nyan Lin Tun 1", content: "bla bla bla" },
    { id: 4, title: "Nyan Lin Tun 1", content: "bla bla bla" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log("CREATE", action.project);
      return state;
    case ADD_PROJECT_ERROR:
      console.log("create project err", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
