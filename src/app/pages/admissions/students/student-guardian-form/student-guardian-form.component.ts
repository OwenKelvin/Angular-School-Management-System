import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { SubmitStudentIdentificationService } from '../../services/submit-student-identification.service';
import { debounceTime } from 'rxjs/operators';
import { StudentIdNumberService } from '../../services/student-id-number/student-id-number.service';
import { IdNumberValidator } from '../validators/student-id-taken.validator';
import { SET_ADMITTED_STUDENT_IDENTIFICATION_INFO } from '../../store/actions/pages.actions';
import { SET_STUDENT_ID_NUMBER } from '../../store/actions/pages.actions';
import { Store, select } from '@ngrx/store';
import { StudentDetailsService, IStudentDetails } from '../../services/studen-details/student-details.service';
import { GenderService } from 'src/app/core/services/gender/gender.service';
import { ReligionService } from 'src/app/core/services/religion/religion.service';
import { AllowedPhoneNumbersService } from 'src/app/core/services/countries/allowed-phone-numbers.service';
interface IError {
  email?: string;
  firstName: string;
  lastName: string;
  middleName: string;
  otherNames: string;
  prefix: string;
  dateOfBirth: string;
  dateOfBirthNumber: string;
  idNumber: string;
}
@Component({
  selector: 'app-student-guardian-form',
  templateUrl: './student-guardian-form.component.html',
  styleUrls: ['./student-guardian-form.component.css']
})

export class StudentGuardianFormComponent implements OnInit {
  @Input() submit = false;
  @Output() submitted: EventEmitter<any>;
  genders: any[];
  religions: any[];
  allowedPhoneCountries: any[];
  serverStudentData: object;
  idNumber: string | number | null | undefined;
  userIdentificaionForm: FormGroup;
  validators = {
    firstName: [Validators.required, Validators.minLength(2)],
    lastName: [Validators.required, Validators.minLength(2)],
    middleName: [],
    otherNames: [],
    namePrefix: [],
    dateOfBirth: [Validators.required],
    email: [Validators.email, Validators.required]
  };
  errors: { guardians: IError[] } = {
    guardians: [
    ]
  };
  countries: any;
  selectedPhoneCode: any;
  createError(i): void {
    if (!this.errors.guardians[i]) {
      this.errors.guardians[i] = {
        email: null,
        firstName: null,
        lastName: null,
        middleName: null,
        otherNames: null,
        prefix: null,
        dateOfBirth: null,
        dateOfBirthNumber: null,
        idNumber: null
      };
    }
  }
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private formSubmit: SubmitStudentIdentificationService,
    private studentIdNumber: StudentIdNumberService,
    private idNumberValidator: IdNumberValidator,
    private studentDetails: StudentDetailsService,
    private getGenders: GenderService,
    private getReligions: ReligionService,
    private allowedPhoneNumbers: AllowedPhoneNumbersService
  ) {
    this.submitted = new EventEmitter();
  }

  guardians(): FormArray {
    return this.userIdentificaionForm.get('guardians') as FormArray;
  }
  addGuardians(): void {
    if (this.userIdentificaionForm.valid) {
      this.guardians().push(this.buildGuardianProfile());
    } else {
      this.validateAllFormFields(this.userIdentificaionForm);
      alert('please fix the errors to continue');
    }

  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach((element, i) => {
          this.validateAllFormFields(element as FormGroup);
          this.validateFirstName(i);
          this.validateLastName(i);
          this.validateDateOfBirth(i);
          this.validateMiddleName(i);
          this.validateOtherNames(i);
          this.validateIdNumber(i);
          this.validateEmail(i);
        });
      }
    });
  }
  ngOnInit() {
    this.selectedPhoneCode = { code: 254, country: 'KE' }
    this.allowedPhoneNumbers.getAllowedCountries().subscribe(data => {
      this.allowedPhoneCountries = data;
    });
    this.allowedPhoneNumbers.getAllCountryCodes().subscribe(data => {
      this.countries = data as Array<any>;
    });
    this.getGenders.getAll().subscribe(data => {
      this.genders = data;
    });
    this.getReligions.getAll().subscribe(data => {
      this.religions = data;
    });
    this.store.dispatch({
      type: SET_STUDENT_ID_NUMBER,
      payload: 'Sqwerty'
    });
    this.userIdentificaionForm = this.fb.group({
      guardians: this.fb.array([this.buildGuardianProfile()])
    });
  }

  buildGuardianProfile(): FormGroup {
    return this.fb.group({
      firstName: ['', this.validators.firstName],
      lastName: ['', this.validators.lastName],
      otherNames: ['', this.validators.otherNames],
      middleName: ['', this.validators.middleName],
      namePrefix: ['', this.validators.namePrefix],
      gender: [null],
      religion: [null],
      dateOfBirth: [null, this.validators.dateOfBirth],
      autogenerateIdNumber: [true, Validators.required],
      idNumber: new FormControl(
        { value: '', disabled: true },
        Validators.required, this.idNumberValidator.studentIdTaken.bind(this.idNumberValidator)),
      birthCertNumber: [''],
      email: ['', this.validators.email],
      phoneDetails: this.fb.group({
        phoneCode: ['{ code: 254, country: "KE" }'],
        phoneNumber: []
      }),
      phone: ['']
    });
  }
  validateFirstName(i) {
    this.createError(i);
    const changeFirstNameError = () => {
      if ((this.guardians().controls[i].get('firstName').dirty || this.guardians().controls[i].get('firstName').touched) &&
        !this.guardians().controls[i].get('firstName').valid) {
        if (this.guardians().controls[i].get('firstName').errors.required) {
          this.errors.guardians[i].firstName = 'First Name is required';
        } else if (this.guardians().controls[i].get('firstName').errors.minlength) {
          this.errors.guardians[i].firstName = 'First Name must have at least 2 characters';
        } else {
          this.errors.guardians[i].firstName = null;
        }
      }
    };
    if (blur) {
      changeFirstNameError();
    } else {
      if (this.errors.guardians[i].firstName) {
        changeFirstNameError();
      }
    }
  }
  validateLastName(i) {
    this.createError(i);
    if ((this.guardians().controls[i].get('lastName').dirty || this.guardians().controls[i].get('lastName').touched) &&
      !this.guardians().controls[i].get('lastName').valid) {
      if (this.guardians().controls[i].get('lastName').errors.required) {
        this.errors.guardians[i].lastName = 'First Name is required';
      } else if (this.guardians().controls[i].get('lastName').errors.minlength) {
        this.errors.guardians[i].lastName = 'Last Name must have at least 2 characters';
      } else {
        this.errors.guardians[i].lastName = null;
      }
    }
  }
  validateIdNumber(i) {
    this.createError(i);
    const idNumber = this.guardians().controls[i].get('idNumber');
    if ((idNumber.dirty || idNumber.touched) &&
      !idNumber.valid) {
      if (idNumber.errors && idNumber.errors.required) {
        this.errors.guardians[i].idNumber = 'Id Number is required';
      } else if (idNumber.errors && idNumber.errors.id_taken) {
        this.errors.guardians[i].idNumber = 'Student with id "' + idNumber.value + '" exists';
      } else {
        this.errors.guardians[i].idNumber = null;
      }
    }
  }
  validateMiddleName(i) {
    this.createError(i);
  }
  validateOtherNames(i) {
    this.createError(i);
  }
  validateDateOfBirth(i) {
    this.createError(i);
    if ((this.guardians().controls[i].get('dateOfBirth').dirty || this.guardians().controls[i].get('dateOfBirth').touched) &&
      !this.guardians().controls[i].get('dateOfBirth').valid) {
      if (this.guardians().controls[i].get('dateOfBirth').errors.required) {
        this.errors.guardians[i].dateOfBirth = 'Date Of Birth is required';
      } else {
        this.errors.guardians[i].dateOfBirth = null;
      }
    }
  }
  validateEmail(i) {
    this.createError(i);
    if ((this.guardians().controls[i].get('email').dirty || this.guardians().controls[i].get('email').touched) &&
      !this.guardians().controls[i].get('email').valid) {
      if (this.guardians().controls[i].get('email').errors.required) {
        this.errors.guardians[i].email = 'Email is required';
      } else if (this.guardians().controls[i].get('email').errors.email) {
        this.errors.guardians[i].email = 'Please enter a valid email';
      }
    }

  }
  validatePhone(i) {
    const getControl = this.guardians().controls[i].get('phoneDetails');
    const phone = String(this.selectedPhoneCode.code) + String(getControl.get('phoneNumber').value);
    this.guardians().controls[i].get('phone').setValue(phone);
  }
}
