import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { Store } from '@ngrx/store';
import { NewSubjectCategoryService } from '../services/new-subject-category.service';
interface Ierror {
  name: string;
}
@Component({
  selector: 'app-create-subject-category',
  templateUrl: './create-subject-category.component.html',
  styleUrls: ['./create-subject-category.component.css']
})
export class CreateSubjectCategoryComponent implements OnInit {
  newSubjectCategoryForm: FormGroup;
  errors: Ierror;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private newSubjectCategory: NewSubjectCategoryService
  ) { }

  ngOnInit() {
    this.errors = { name: '' };
    this.newSubjectCategoryForm = this.fb.group({
      name: ['', [Validators.required]],
      active: [true],
    });
  }
  validateName() {
    if ((this.newSubjectCategoryForm.get('name').dirty || this.newSubjectCategoryForm.get('name').touched) &&
      !this.newSubjectCategoryForm.get('name').valid) {
      if (this.newSubjectCategoryForm.get('name').errors.required) {
        this.errors.name = 'Subject Category Name is required';
      } else {
        this.errors.name = null;
      }
    }

  }
  submit() {
    this.newSubjectCategoryForm.markAllAsTouched();
    this.validateName();
    if (this.newSubjectCategoryForm.valid) {
      this.newSubjectCategory.submit(this.newSubjectCategoryForm.value).subscribe(
        data => {
          this.store.dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: true
          });
        }
      );

    }
  }

}
