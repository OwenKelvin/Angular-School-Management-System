import { createAction, props } from '@ngrx/store';
import { IStudentIdentificationInfo } from '../interfaces/student-identification-info.interface';

const SET_STUDENT_IDENTIFICATION_INFO = '[Student Identification Info] set details';

export const setStudentIdentificationInfo = createAction(
    SET_STUDENT_IDENTIFICATION_INFO,
    props<{ identificationInfo: IStudentIdentificationInfo }>()
);
