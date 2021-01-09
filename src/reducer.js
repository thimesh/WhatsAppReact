export const initialState = {
  user: null,
}; // initial start with user not logged in

export const actionTypes = {
  SET_USER: "SET_USER",
}; //action which will be pushed in data layer

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      }; //keeps previous state and perform action to add user
    default:
      return state;
  }
};

export default reducer;
