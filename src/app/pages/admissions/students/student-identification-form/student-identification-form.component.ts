import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { SubmitStudentIdentificationService } from '../../services/submit-student-identification.service';

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
    private fb: FormBuilder,
    private formSubmit: SubmitStudentIdentificationService
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
      idNumber: new FormControl({value: '', disabled: true}, Validators.required),
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
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.submit.currentValue && changes.submit && !changes.submit.firstChange) {
      if ( this.userIdentificaionForm.valid ) {
        this.submitted.emit(true);
        this.formSubmit.submit( this.userIdentificaionForm.value).subscribe(
          success => console.log(success),
          error => console.log(error)
        );
      } else {
        this.submitted.emit(false);
        Object.keys(this.userIdentificaionForm.controls).forEach(field => { // {1}
          const control = this.userIdentificaionForm.get(field);            // {2}
          control.markAsTouched({ onlySelf: true });       // {3}
        });
        this.validateFirstName();
        this.validateLastName();
        this.validateDateOfBirth();
        this.validateMiddleName();
        this.validateOtherNames();
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
    }
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
    if ((this.userIdentificaionForm.get('idNumber').dirty || this.userIdentificaionForm.get('idNumber').touched) &&
      !this.userIdentificaionForm.get('idNumber').valid ) {
        if (this.userIdentificaionForm.get('idNumber').errors.required) {
          this.errors.idNumber = 'Id Number is required';
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
