const TOGGLE_SIDEBAR = '[APP STATE] toggle side bar';
const TOGGLE_DIALOGUE = '[APP STATE] show dialog';
export const reducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        showSideBar: action.payload
      };
    case TOGGLE_DIALOGUE:
      return {
        ...state,
        showDialogue: action.payload
      };
    default:
      return state;
  }
}
