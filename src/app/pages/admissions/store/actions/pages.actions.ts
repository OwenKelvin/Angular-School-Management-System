import { createAction, props } from '@ngrx/store';
import { IStudentIdentificationInfo } from '../interfaces/student-identification-info.interface';

const SET_STUDENT_IDENTIFICATION_INFO = '[Student Identification Info] set details';

export const setStudentIdentificationInfo = createAction(
    SET_STUDENT_IDENTIFICATION_INFO,
    props<{ identificationInfo: IStudentIdentificationInfo }>()
);

export const SET_ADMITTED_STUDENT_IDENTIFICATION_INFO = '[ADMISSIONS STUDENT] Set student details';
export const SET_STUDENT_ID_NUMBER = '[Admission Student] set id number';