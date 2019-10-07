import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl } from '@angular/forms';
import { SubmitStudentIdentificationService } from '../../services/submit-student-identification.service';
import { debounceTime } from 'rxjs/operators';
import { StudentIdNumberService } from '../../services/student-id-number/student-id-number.service';
import { IdNumberValidator } from '../validators/student-id-taken.validator';
import { SET_ADMITTED_STUDENT_IDENTIFICATION_INFO } from '../../store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-student-identification-form',
  templateUrl: './student-identification-form.component.html',
  styleUrls: ['./student-identification-form.component.less']
})
export class StudentIdentificationFormComponent implements OnInit, OnChanges {
  @Input() submit = false;
  @Output() submitted: EventEmitter<any>;
  userIdentificaionForm: FormGroup;
  validators = {
    firstName: [Validators.required, Validators.minLength(2)],
    lastName: [Validators.required, Validators.minLength(2)],
    middleName: [],
    otherNames: [],
    namePrefix: [],
    dateOfBirth: [Validators.required]
  };
  errors = {
    firstName: null,
    lastName: null,
    middleName: null,
    otherNames: null,
    prefix: null,
    dateOfBirth: null,
    dateOfBirthNumber: null,
    idNumber: null
  };
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private formSubmit: SubmitStudentIdentificationService,
    private studentIdNumber: StudentIdNumberService,
    private idNumberValidator: IdNumberValidator
  ) {
    this.submitted = new EventEmitter();
  }

  ngOnInit() {
    this.userIdentificaionForm = this.fb.group({
      firstName: [ '', this.validators.firstName ],
      lastName: [ '', this.validators.lastName ],
      otherNames: [ '', this.validators.otherNames ],
      middleName: [ '', this.validators.middleName ],
      namePrefix: [ '', this.validators.namePrefix ],
      dateOfBirth: [ null, this.validators.dateOfBirth],
      autogenerateIdNumber: [true, Validators.required],
      idNumber: new FormControl(
        { value: '', disabled: true},
        Validators.required, this.idNumberValidator.studentIdTaken.bind(this.idNumberValidator)),
      birthCertNumber: ['']
    });

    this.userIdentificaionForm.get('autogenerateIdNumber').valueChanges.subscribe((autogenerate) => {
      if (autogenerate) {
        this.userIdentificaionForm.get('idNumber').setValue('');
        this.userIdentificaionForm.get('idNumber').disable();
      } else {
        this.userIdentificaionForm.get('idNumber').enable();
      }
    });

    this.userIdentificaionForm.get('idNumber').valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.validateIdNumber()
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.submit.currentValue && changes.submit && !changes.submit.firstChange) {
      if ( this.userIdentificaionForm.valid ) {
        this.submitted.emit(true);
        this.formSubmit.submit( this.userIdentificaionForm.value).subscribe(
          success => {
            this.store.dispatch({
              type: SET_ADMITTED_STUDENT_IDENTIFICATION_INFO,
              payload: success
            });

          },
          error => { 
            // Error Has been captured by interceptor 
          }
        );
      } else {
        this.submitted.emit(false);
        Object.keys(this.userIdentificaionForm.controls).forEach(field => {
          const control = this.userIdentificaionForm.get(field);
          control.markAsTouched({ onlySelf: true });
        });
        this.validateFirstName();
        this.validateLastName();
        this.validateDateOfBirth();
        this.validateMiddleName();
        this.validateOtherNames();
        this.validateIdNumber();
      }
    }
  }

  validateFirstName({blur} = {blur: true}) {
    const changeFirstNameError = () => {
      if ((this.userIdentificaionForm.get('firstName').dirty || this.userIdentificaionForm.get('firstName').touched) &&
      !this.userIdentificaionForm.get('firstName').valid ) {
        if (this.userIdentificaionForm.get('firstName').errors.required) {
          this.errors.firstName = 'First Name is required';
        } else if (this.userIdentificaionForm.get('firstName').errors.minlength) {
          this.errors.firstName = 'First Name must have at least 2 characters';
        } else {
          this.errors.firstName = null;
        }
      }
    };
    if (blur) {
      changeFirstNameError();
    } else {
      if ( this.errors.firstName ) {
        changeFirstNameError();
      }
    }
  }
  validateLastName() {
    if ((this.userIdentificaionForm.get('lastName').dirty || this.userIdentificaionForm.get('lastName').touched) &&
      !this.userIdentificaionForm.get('lastName').valid ) {
        if (this.userIdentificaionForm.get('lastName').errors.required) {
          this.errors.lastName = 'First Name is required';
        } else if (this.userIdentificaionForm.get('lastName').errors.minlength) {
          this.errors.lastName = 'Last Name must have at least 2 characters';
        } else {
          this.errors.lastName = null;
        }
      }
  }
  validateIdNumber() {
    const idNumber = this.userIdentificaionForm.get('idNumber');
    if ((idNumber.dirty || idNumber.touched) &&
      !idNumber.valid ) {
        if (idNumber.errors && idNumber.errors.required) {
          this.errors.idNumber = 'Id Number is required';
        } else if (idNumber.errors && idNumber.errors.id_taken) {
          this.errors.idNumber = 'Student with id "' + idNumber.value + '" exists';
        } else {
          this.errors.idNumber = null;
        }
      }
  }
  validateMiddleName() {
  }
  validateOtherNames() {
  }
  validateDateOfBirth() {
    if ((this.userIdentificaionForm.get('dateOfBirth').dirty || this.userIdentificaionForm.get('dateOfBirth').touched) &&
    !this.userIdentificaionForm.get('dateOfBirth').valid ) {
      if (this.userIdentificaionForm.get('dateOfBirth').errors.required) {
        this.errors.dateOfBirth = 'Date Of Birth is required';
      } else {
        this.errors.dateOfBirth = null;
      }
    }
  }
}
