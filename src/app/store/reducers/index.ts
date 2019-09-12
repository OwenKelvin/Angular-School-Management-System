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
export function reducer(state, action) {
  switch (action.type) {
      case TOGGLE_SIDEBAR:
        const app = state ? state.app : {};
        const showSideBar = { ...app, showSideBar: action.payload };
        return {
            ...state,
            app: showSideBar
      };
      default:
          return state;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
