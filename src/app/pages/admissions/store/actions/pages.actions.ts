import { createAction, props } from '@ngrx/store';
import { IStudentIdentificationInfo } from '../interfaces/student-identification-info.interface';

const SET_STUDENT_IDENTIFICATION_INFO = '[Student Identification Info] set details';

export const setStudentIdentificationInfo = createAction(
    SET_STUDENT_IDENTIFICATION_INFO,
    props<{ identificationInfo: IStudentIdentificationInfo }>()
);

export const SET_ADMITTED_STUDENT_IDENTIFICATION_INFO = '[ADMISSIONS STUDENT] Set student details';
export const SET_STUDENT_ID_NUMBER = '[ADMISSION STUDENT] set id number';
export const SUBMIT_STUDENT_GUARDIAN = '[ADMISSIONS STUDENT] submit student guardians';
export const STUDENT_GUARDIANS_CREATED = '[ADMISSIONS STUDENT] guardians created';
