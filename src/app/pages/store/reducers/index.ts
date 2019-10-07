import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export class State {

}

export const admissionsFeatureKey = 'admissions';

const STUDENT_IDENTIFICATION = '[STUDENT IDENTIFICATION] save details';
export function reducer(state, action) {
  switch (action.type) {
    case STUDENT_IDENTIFICATION:
      const student = state ? state.student : {};
      const newStudentIdentityInfo = { ...student, new_student_identity_info: action.payload };
      return {
        ...state,
        new_student_identity_info: newStudentIdentityInfo
      };
    default:
      return state;
  }
}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
