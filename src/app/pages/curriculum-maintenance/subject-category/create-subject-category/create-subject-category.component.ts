import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { Store } from '@ngrx/store';
import { NewSubjectCategoryService } from '../services/new-subject-category.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SubjectCategoryService } from '../services/subject-category.service';
import { IUnitCategory } from '../view-subject-categories/view-subject-categories.component';
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
  newForm: boolean;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private newSubjectCategory: NewSubjectCategoryService,
    private subjetCategory: SubjectCategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.generateForm();
    this.errors = { name: '' };
    const activatedRoute: ActivatedRouteSnapshot = this.router.routerState.root.children[0].children[0].children[0].snapshot;
    const id = activatedRoute.params.id;
    if (id === undefined) {
      this.newForm = true;
    } else {
      this.newForm = false;
      this.subjetCategory.get(id).subscribe(item => {
        this.generateForm(item);
      });
    }
  }
  generateForm(
    { id = null, active = true, name = '', description = '' }: IUnitCategory =
      { id: null, active: true, name: '', description: '' } as IUnitCategory) {
    this.newSubjectCategoryForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      active: [active],
      description: [description]
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
    if (this.newSubjectCategoryForm.valid) {
      this.newSubjectCategory.submit(this.newSubjectCategoryForm.value).subscribe(
        data => {
          if (this.newForm) {
            this.generateForm();
            this.newSubjectCategoryForm.get('name').clearValidators();
            this.newSubjectCategoryForm.get('name').updateValueAndValidity();
          }
          this.store.dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: true
          });
        }
      );

    } else {
      this.newSubjectCategoryForm.markAllAsTouched();
      this.validateName();
    }
  }

}
