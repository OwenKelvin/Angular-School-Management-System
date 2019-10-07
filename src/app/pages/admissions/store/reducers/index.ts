import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import { State } from 'src/app/pages/store/reducers';
import { SET_ADMITTED_STUDENT_IDENTIFICATION_INFO, SET_STUDENT_ID_NUMBER } from '../actions/pages.actions';

export const admissionsFeatureKey = 'admissions';



export const reducers: ActionReducerMap<State> = {
  admissions: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export function reducer(state, action) {

  const admissions = state ? state.admissions : {};
  switch (action.type) {
    case SET_STUDENT_ID_NUMBER:
      return {
        ...state,
        student_id_number: action.payload
      };
      break;
    case SET_ADMITTED_STUDENT_IDENTIFICATION_INFO:
      const student = { ...admissions, student: action.payload };

      return {
        ...state,
        ...student
      };
    default:
      return state;
  }
}

