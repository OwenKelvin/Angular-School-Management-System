import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { IdNumberValidator } from '../validators/student-id-taken.validator';
import { SET_STUDENT_ID_NUMBER } from '../../store/actions/pages.actions';
import { Store, select } from '@ngrx/store';
import { GenderService } from 'src/app/core/services/gender/gender.service';
import { ReligionService } from 'src/app/core/services/religion/religion.service';
import { AllowedPhoneNumbersService } from 'src/app/core/services/countries/allowed-phone-numbers.service';
import { ErrorStateMatcher } from '@angular/material';
import { SubmitStudentGuardiansService } from '../../services/submit-student-guardians.service';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { debounceTime } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { GuardianService } from '../../services/guardian-details/guardian.service';
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
  phone?: string;
  relation?: string;
}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl): boolean {
    return control.hasError('invalid');
  }
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
    email: [
      Validators.pattern('^[a-zA-Z]+([\.-]?[a-zA-Z0-9]+)*@[a-zA-Z]+([\.-]?[a-zA-Z]+)*(\.[a-zA-Z]{2,3})+$'), Validators.required]
  };
  errors: { guardians: IError[] } = {
    guardians: [
    ]
  };
  countries: any;
  selectedPhoneCode: number | string;
  selectedPhone: { country: any, code: any};
  phoneErrorMatcher: MyErrorStateMatcher;
  studentAdmissionNumber: any;
  usersData: any[];
  confirmData: boolean[];
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
        idNumber: null,
        phone: null,
        relation: null
      };
    }
  }
  constructor(
    private store: Store<any>,
    private fb: FormBuilder,
    private idNumberValidator: IdNumberValidator,
    private getGenders: GenderService,
    private getReligions: ReligionService,
    private allowedPhoneNumbers: AllowedPhoneNumbersService,
    private studentGuardian: SubmitStudentGuardiansService,
    private users: UsersService,
    private studentGuardians: GuardianService
  ) {
    this.submitted = new EventEmitter();
    this.usersData = [null];
    this.confirmData = [false];
  }

  guardians(): FormArray {
    return this.userIdentificaionForm.get('guardians') as FormArray;
  }
  addGuardians(): void {
    if (this.userIdentificaionForm.valid) {
      this.guardians().push(this.buildGuardianProfile());
      this.usersData.push(null);
      this.confirmData.push(false);
      this.subscribeToEmailChecking();
    } else {
      this.validateAllFormFields(this.userIdentificaionForm);
      alert('please fix the errors to continue');
    }

  }
  validateAllFormFields(formGroup: FormGroup): void {
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
          this.validateRelation(i);
        });
      }
    });
  }
  ngOnInit() {
    this.phoneErrorMatcher = new MyErrorStateMatcher();
    this.selectedPhone = { code: 254, country: 'KE' };
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
    // this.store.dispatch({
    //   type: SET_STUDENT_ID_NUMBER,
    //   payload: 'Sqwerty'
    // });
    this.userIdentificaionForm = this.fb.group({
      guardians: this.fb.array([this.buildGuardianProfile()])
    });

    this.store.pipe(select(state => state.admissions)).subscribe(
      admissions => {
        if (admissions && admissions.student_id_number) {
          this.studentAdmissionNumber = admissions.student_id_number;
        }

        if (admissions && admissions.submitGuardian) {

          if (this.userIdentificaionForm.valid) {
            this.userIdentificaionForm.get('guardians').value.forEach(item => {
              this.studentGuardian.submit({ ...item, student_id: this.studentAdmissionNumber })
                .subscribe(data => {
                  this.submitted.emit(true);
                  this.store.dispatch({
                    type: SHOW_SUCCESS_MESSAGE,
                    payload: true
                  });
                });
            });
          } else {
            this.validateAllFormFields(this.userIdentificaionForm);
          }
        }
      });
    this.subscribeToEmailChecking();
    this.getGuardians();
  }
  getGuardians(): void {
    if (this.studentAdmissionNumber) {
      this.studentGuardians.getGuardiansFor(this.studentAdmissionNumber).subscribe(data => {
        // TODO update any guardians found
        if ((data as Array<any>).length > 0) {
          (this.userIdentificaionForm.get('guardians') as FormArray).clear();
          (data as Array<any>).forEach((item, i) => {
            this.addGuardians();
            this.usersData[i] = item;
            this.updateFieldsForEmail(i);
          });
        }

      });
    }
  }
  subscribeToEmailChecking(): void {
    (this.userIdentificaionForm.get('guardians') as FormArray).controls.forEach((element, i) => {
      element.get('email').valueChanges.pipe(
        debounceTime(1000)
      ).subscribe(
        (event) => {
          if (event && event.length && event.length > 5) {
            this.users.findIfEmailExists(event).subscribe(data => {
              this.confirmData[i] = false;
              if (data) {
                this.confirmData[i] = true;
              }
              this.usersData[i] = data;
            });
          }
        }
      );
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
      email: ['okotino@yahoo.com', this.validators.email],
      phoneDetails: this.fb.group({
        phoneCode: [254],
        phoneNumber: ['']
      }),
      phone: [''],
      relation: ['Father', Validators.required]
    });
  }
  validateFirstName(i): void {
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
  validateLastName(i): void {
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
  validateRelation(i): void {
    this.createError(i);
    if ((this.guardians().controls[i].get('relation').dirty || this.guardians().controls[i].get('relation').touched) &&
      !this.guardians().controls[i].get('relation').valid) {
      if (this.guardians().controls[i].get('relation').errors.required) {
        this.errors.guardians[i].relation = 'Relation to student is required';
      } else {
        this.errors.guardians[i].lastName = null;
      }
    }
  }
  validateIdNumber(i): void {
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
  validateMiddleName(i): void {
    this.createError(i);
  }
  validateOtherNames(i): void {
    this.createError(i);
  }
  validateDateOfBirth(i): void {
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
  validateEmail(i): void {
    this.createError(i);
    if ((this.guardians().controls[i].get('email').dirty || this.guardians().controls[i].get('email').touched) &&
      !this.guardians().controls[i].get('email').valid) {
      if (this.guardians().controls[i].get('email').errors.required) {
        this.errors.guardians[i].email = 'Email is required';
      } else if (this.guardians().controls[i].get('email').errors.pattern) {
        this.errors.guardians[i].email = 'Please enter a valid email';
      }
    }

  }
  updatePhoneInputErrorState(i): void {
    if (this.guardians().controls[i].get('phone').dirty) {
      this.validatePhone(i);
    }

  }
  validatePhone(i): void {
    this.createError(i);
    const getControl = this.guardians().controls[i].get('phoneDetails');
    const phone = String(getControl.get('phoneCode').value) + String(getControl.get('phoneNumber').value);
    this.guardians().controls[i].get('phone').setValue(phone);
    if (getControl.get('phoneNumber').value === null || getControl.get('phoneNumber').value === '') {

    } else if (!this.allowedPhoneNumbers.isValidPhoneNumber(phone)) {
      this.guardians().controls[i].get('phone').markAsDirty();
      this.errors.guardians[i].phone = 'The Phone Number Entered is Invalid';
      getControl.get('phoneNumber').setErrors({ invalid: 'Phone Number is invalid' });
    } else {
      getControl.get('phoneNumber').setErrors(null);
      getControl.get('phoneNumber').clearValidators();
      this.guardians().controls[i].get('phone').clearValidators();
      this.errors.guardians[i].phone = null;
    }
  }
  updateSelectedPhone(i): void {
    this.selectedPhone = this.countries.find(country => country.code === this.selectedPhoneCode);
  }
  removeGuadian(i): void {
    this.guardians().controls[i].get('phoneDetails').get('phoneNumber').setErrors(null);
    const confirmed = confirm(' Are You sure you wish to remove Item?');
    if (confirmed) {
      this.guardians().controls.splice(i, 1);
      this.usersData.splice(i, 1);
      this.confirmData.splice(i, 1);
    }
  }
  updateFieldsForEmail(i): void {
    const data = this.usersData[i];
    this.guardians().controls[i].get('firstName').setValue(data.first_name);
    this.guardians().controls[i].get('lastName').setValue(data.last_name);
    this.guardians().controls[i].get('middleName').setValue(data.middle_name);
    this.guardians().controls[i].get('otherNames').setValue(data.other_names);
    this.guardians().controls[i].get('namePrefix').setValue(data.name_prefix_id);
    this.guardians().controls[i].get('dateOfBirth').setValue(data.date_of_birth);
    this.guardians().controls[i].get('birthCertNumber').setValue(data.birth_cert_number);
    this.guardians().controls[i].get('gender').setValue(data.gender_id);
    this.guardians().controls[i].get('religion').setValue(data.religion_id);
    this.confirmData[i] = false;
  }
  clearEmail(i): void {
    this.guardians().controls[i].get('email').setValue('');
    this.usersData[i] = null;
    this.confirmData[i] = false;
  }
}
