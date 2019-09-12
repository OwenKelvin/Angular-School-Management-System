import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export const admissionsFeatureKey = 'admissions';

export interface State {

}

const STUDENT_IDENTIFICATION = '[STUDENT IDENTIFICATION] save details';
export function reducer(state, action) {
  console.log (state);

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
