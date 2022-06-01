const initState = {
  users: [
    { id: 1, name: "Nguyen", channel: "Youtube" },
    { id: 2, name: "Tien", channel: "Youtube" },
    { id: 3, name: "Minh", channel: "Youtube" },
  ],
  posts: [],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      console.log(action);
      let user = state.users;
      user = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        user,
      };
      break;
    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10);
      let users = { id: id, name: `random-${id}` };

      return { ...state, user: [...state.user, users] };

    default:
      return state;
  }
};

export default rootReducer;
