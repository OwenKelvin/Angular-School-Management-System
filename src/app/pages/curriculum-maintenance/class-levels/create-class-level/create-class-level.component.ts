import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ClassLevelService } from '../services/class-level.service';

export default interface IClassLevel {
  id?: number;
  name: string;
  active?: boolean | 1 | 0 | undefined | null;
  classLevelCategory: number;
  abbr: string;
}

@Component({
  selector: 'app-create-class-level',
  templateUrl: './create-class-level.component.html',
  styleUrls: ['./create-class-level.component.css']
})
export class CreateClassLevelComponent implements OnInit {
  @Input() category: number;
  @Output() submitted = new EventEmitter();
  formId: any;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private classLevel: ClassLevelService,
    private router: Router
  ) {}
  errors: {
    name: string;
    abbr: string;
    classLevelCategory: number;
  };
  classLevelForm: FormGroup;
  newForm: boolean;

  ngOnInit() {
    this.newForm = true;
    this.errors = {
      name: '',
      abbr: '',
      classLevelCategory: null
    };
    this.generateClassLevelForm();

    let activatedRoute: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();

    if (
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0] &&
      this.router.routerState.root.children[0].children
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      const id = activatedRoute.params.id;
      if (this.category) {
        this.generateClassLevelForm({
          classLevelCategory: this.category,
          name: '',
          abbr: ''
        });
      } else {
        if (id === undefined) {
          this.newForm = true;
        } else {
          this.newForm = false;
          this.formId = id;
          this.classLevel
            .get({ id })
            .pipe(
              map(res => {
                return {
                  ...res,
                  abbr: res.abbreviation,
                  classLevelCategory: res.class_level_category_id
                };
              })
            )
            .subscribe(item => {
              this.generateClassLevelForm(item);
            });
        }
      }
    }
  }
  generateClassLevelForm(
    {
      id = null,
      name = '',
      active = true,
      abbr = '',
      classLevelCategory = null
    }: IClassLevel = {
      id: null,
      name: '',
      active: true,
      abbr: '',
      classLevelCategory: null
    }
  ) {
    this.classLevelForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      abbr: [abbr, [Validators.required]],
      classLevelCategory: [classLevelCategory, [Validators.required]],
      active: [active]
    });
  }
  validateName() {
    if (
      (this.classLevelForm.get('name').dirty ||
        this.classLevelForm.get('name').touched) &&
      !this.classLevelForm.get('name').valid
    ) {
      if (this.classLevelForm.get('name').errors.required) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = null;
      }
    }
  }

  validateAbbr() {
    if (
      (this.classLevelForm.get('abbr').dirty ||
        this.classLevelForm.get('abbr').touched) &&
      !this.classLevelForm.get('abbr').valid
    ) {
      if (this.classLevelForm.get('abbr').errors.required) {
        this.errors.abbr = 'Abbreviation field is required';
      } else {
        this.errors.abbr = null;
      }
    }
  }
  submit() {
    if (this.classLevelForm.valid) {
      this.classLevel.submit(this.classLevelForm.value).subscribe(() => {
        this.submitted.emit(true);
        if (this.newForm) {
          this.generateClassLevelForm();
          this.classLevelForm.get('name').clearValidators();
          this.classLevelForm.get('name').updateValueAndValidity();
        } else {
          this.classLevel
            .get({ id: this.formId })
            .pipe(
              map(res => {
                return {
                  ...res,
                  abbr: res.abbreviation,
                  classLevelCategory: res.class_level_category_id
                };
              })
            )
            .subscribe(item => {
              this.generateClassLevelForm({ ...item });
            });
        }
        this.store.dispatch({
          type: SHOW_SUCCESS_MESSAGE,
          payload: true
        });
      });
    } else {
      this.classLevelForm.markAllAsTouched();
      this.validateName();
    }
  }
}
