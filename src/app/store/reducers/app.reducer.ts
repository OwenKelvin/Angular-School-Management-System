const TOGGLE_SIDEBAR = '[APP STATE] toggle side bar';
export const reducer = (state, action) => {
  console.log (state);
  switch (action.type) {
      case TOGGLE_SIDEBAR:
        return {
            ...state,
            showSideBar: action.payload
      };
      default:
          return state;
  }
}
