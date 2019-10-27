import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ClassLevelCategoryService } from '../services/class-level-category.service';

export default interface IClassLevelCategory {
  id?: number;
  name: string;
  active?: boolean | 1 | 0 | undefined | null;
}

@Component({
  selector: 'app-create-class-level-category',
  templateUrl: './create-class-level-category.component.html',
  styleUrls: ['./create-class-level-category.component.css']
})
export class CreateClassLevelCategoryComponent implements OnInit {
  formId: any;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private classLevelCategory: ClassLevelCategoryService,
    private router: Router
  ) {}
  errors: {
    name: string;
  };
  classLevelCategoryForm: FormGroup;
  newForm: boolean;

  ngOnInit() {
    this.newForm = true;
    this.errors = {
      name: ''
    };
    this.generateClassLevelCategoryForm();
    let activatedRoute: ActivatedRouteSnapshot;
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      const id = activatedRoute.params.id;

      if (id === undefined) {
        this.newForm = true;
      } else {
        this.newForm = false;
        this.formId = id;
        this.classLevelCategory.get({ id }).subscribe(item => {
          this.generateClassLevelCategoryForm(item);
        });
      }
    }
  }
  generateClassLevelCategoryForm(
    { id = null, name = '', active = true }: IClassLevelCategory = {
      id: null,
      name: '',
      active: true
    }
  ) {
    this.classLevelCategoryForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      active: [active]
    });
  }
  validateName() {
    if (
      (this.classLevelCategoryForm.get('name').dirty ||
        this.classLevelCategoryForm.get('name').touched) &&
      !this.classLevelCategoryForm.get('name').valid
    ) {
      if (this.classLevelCategoryForm.get('name').errors.required) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = null;
      }
    }
  }

  submit() {
    if (this.classLevelCategoryForm.valid) {
      this.classLevelCategory
        .submit(this.classLevelCategoryForm.value)
        .subscribe(() => {
          if (this.newForm) {
            this.generateClassLevelCategoryForm();
            this.classLevelCategoryForm.get('name').clearValidators();
            this.classLevelCategoryForm.get('name').updateValueAndValidity();
          } else {
            this.classLevelCategory
              .get({ id: this.formId })
              .pipe(
                map(res => {
                  return {
                    ...res
                  };
                })
              )
              .subscribe(item => {
                this.generateClassLevelCategoryForm(item);
              });
          }
          this.store.dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: true
          });
        });
    } else {
      this.classLevelCategoryForm.markAllAsTouched();
      this.validateName();
    }
  }
}
