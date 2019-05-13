import { ADD_PROJECT } from "../type";

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
      return null;
    default:
      return state;
  }
};

export default projectReducer;
