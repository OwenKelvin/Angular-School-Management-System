import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
// import { reducer } from './app.reducer';



export interface State {
  app: { user: object, showSideBar: boolean, showMessage: boolean};
}

export const reducers: ActionReducerMap<State> = {
  app: reducer
};

const TOGGLE_SIDEBAR = '[APP STATE] toggle side bar';
const TOGGLE_DIALOGUE = '[APP STATE] show dialog';
const SET_LOGGED_IN_USER = '[APP STATE] set logged in user';

export function reducer(state, action) {
  const freshState: State = {
    app: {
      user: {
        first_name: '',
        last_name: ''
      },
      showSideBar: false,
      showMessage: false
    }
  };
  const app: State = state ? state.app : freshState.app;
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state, app: { ...app, user: action.payload }
      };

    case TOGGLE_SIDEBAR:
      const showSideBar = { ...app, showSideBar: action.payload };
      return {
        ...state,
        app: showSideBar
      };
    case TOGGLE_DIALOGUE:
      const showMessage = { ...app, showMessage: action.payload };
      return {
        ...state,
        app: showMessage
      };
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
