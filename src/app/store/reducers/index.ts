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
  app: object;
}

export const reducers: ActionReducerMap<State> = {
  app: reducer
};

const TOGGLE_SIDEBAR = '[APP STATE] toggle side bar';
const TOGGLE_DIALOGUE = '[APP STATE] show dialog';

export function reducer(state, action) {
  const app = state ? state.app : {};
  switch (action.type) {
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
