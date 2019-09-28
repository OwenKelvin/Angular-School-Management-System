import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../../environments/environment';

export const admissionsFeatureKey = 'admissions';

export interface State {
  admissions: object;
}

export const reducers: ActionReducerMap<State> = {
  admissions: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const SET_ADMITTED_STUDENT_IDENTIFICATION_INFO = '[ADMISSIONS STUDENT] Set student details';
export function reducer(state, action) {

  const admissions = state ? state.admissions : {};
  switch (action.type) {
    case SET_ADMITTED_STUDENT_IDENTIFICATION_INFO:
      const studentInfo = { ...admissions, createdStudent: action.payload };
      console.log(state)
      return {
        ...state,
        admissions: studentInfo
      };
    default:
      return state;
  }
}

