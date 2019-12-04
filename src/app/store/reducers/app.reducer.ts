import { SHOW_SUCCESS_MESSAGE } from '../actions/app.action';
import { TOGGLE_DIALOGUE } from '.';

const TOGGLE_SIDEBAR = '[APP STATE] toggle side bar';

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
};
