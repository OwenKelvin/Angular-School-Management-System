import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UnitService } from '../services/unit.service';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';

export default interface IUnitForm {
  id?: number;
  name: string;
  active?: boolean | 1 | 0 | undefined | null;
  abbr: string;
  description?: string;
  subjectLevels?: FormArray | undefined | null;
}
@Component({
  selector: 'app-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.css']
})
export class CreateUnitComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private unit: UnitService
  ) {}
  errors: {
    name: string;
    abbr: string;
    subjectLevels: string[];
  };
  unitForm: FormGroup;
  newForm: boolean;

  ngOnInit() {
    this.newForm = true;
    this.errors = { name: '', abbr: '', subjectLevels: [] };
    this.generateUnitForm();
  }
  generateUnitForm(
    {
      id = null,
      name = '',
      active = true,
      abbr = '',
      description = '',
      subjectLevels = null
    }: IUnitForm = {
      id: null,
      name: '',
      active: true,
      description: '',
      abbr: '',
      subjectLevels: null
    }
  ) {
    if (subjectLevels === null) {
      subjectLevels = this.fb.array([this.buildUnitForm()]);
    }

    this.unitForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      abbr: [abbr, [Validators.required]],
      description: [description],
      active: [active],
      subjectLevels
    });

  }
  buildUnitForm() {
    return this.fb.group({ name: ['', Validators.required] });
  }
  validateName() {
    if (
      (this.unitForm.get('name').dirty || this.unitForm.get('name').touched) &&
      !this.unitForm.get('name').valid
    ) {
      if (this.unitForm.get('name').errors.required) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = null;
      }
    }
  }
  validateAbbr() {
    if (
      (this.unitForm.get('abbr').dirty || this.unitForm.get('abbr').touched) &&
      !this.unitForm.get('abbr').valid
    ) {
      if (this.unitForm.get('abbr').errors.required) {
        this.errors.abbr = 'Abbreviation field is required';
      } else {
        this.errors.abbr = null;
      }
    }
  }
  validatesubjectLevelName(i) {
    const form = (this.unitForm.get('subjectLevels') as FormArray).controls[i];
    if (
      (form.get('name').dirty || form.get('name').touched) &&
      !form.get('name').valid
    ) {
      if (form.get('name').errors.required) {
        this.errors.subjectLevels[i] = 'Subject Level Name field is required';
      } else {
        this.errors.subjectLevels[i] = null;
      }
    }
  }
  addSubjectLevel() {
    (this.unitForm.get('subjectLevels') as FormArray).push(this.buildUnitForm());
  }
  deleteSubjectLevel(i) {
    const deletionConfirmed = confirm('Are you sure you wish to delete item?');
    if (deletionConfirmed) {
      (this.unitForm.get('subjectLevels') as FormArray).controls.splice(i, 1);
    }
  }
  submit() {
    if (this.unitForm.valid) {
      this.unit.submit(this.unitForm.value).subscribe(data => {
        if (this.newForm) {
          this.generateUnitForm();
          this.unitForm.get('name').clearValidators();
          this.unitForm.get('name').updateValueAndValidity();
        }
        this.store.dispatch({
          type: SHOW_SUCCESS_MESSAGE,
          payload: true
        });
      });
    } else {
      this.unitForm.markAllAsTouched();
      this.validateName();
    }
  }
}
