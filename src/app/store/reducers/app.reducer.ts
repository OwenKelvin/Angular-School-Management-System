import { SHOW_SUCCESS_MESSAGE } from '../actions/app.action';

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
    case SHOW_SUCCESS_MESSAGE:
      return {
        ...state,
        showSuccessMessage: action.payload
      };
    default:
      return state;
  }
}
