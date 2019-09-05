import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-identification-form',
  templateUrl: './student-identification-form.component.html',
  styleUrls: ['./student-identification-form.component.less']
})
export class StudentIdentificationFormComponent implements OnInit {
  @Input() submitted: boolean;
  userIdentificaionForm: FormGroup;
  validators = {
    firstName: [Validators.required, Validators.minLength(2)],
    lastName: [Validators.required, Validators.minLength(2)],
    middleName: [],
    otherNames: [],
    namePrefix: [],
    dateOfBirth: []
  };
  errors = {
    firstName: null,
    lastName: null,
    middleName: null,
    otherNames: null,
    prefix: null,
    dateOfBirth: null,
    dateOfBirthNumber: null
  };
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.userIdentificaionForm = this.fb.group({
      firstName: [ '', this.validators.firstName ],
      lastName: [ '', this.validators.lastName ],
      otherNames: [ '', this.validators.otherNames ],
      middleName: [ '', this.validators.middleName ],
      namePrefix: [ '', this.validators.namePrefix ],
    });
  }
  validateFirstName() {
  }
  validateLastName() {
  }
  validateMiddleName() {
  }
  validateOtherNames() {
  }
}
