import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { UnitService } from '../services/unit.service';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { SubjectCategoryService } from '../../subject-category/services/subject-category.service';
import { IUnitCategory } from '../../subject-category/view-subject-categories/view-subject-categories.component';
import { MatSelect } from '@angular/material';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { UnitLevelService } from '../services/unit-level.service';

export default interface IUnitForm {
  id?: number;
  name: string;
  active?: boolean | 1 | 0 | undefined | null;
  abbr: string;
  description?: string;
  subjectLevels?: FormArray | undefined | null | any[];
  unitCategory: number;
}
@Component({
  selector: 'app-create-unit',
  templateUrl: './create-unit.component.html',
  styleUrls: ['./create-unit.component.css']
})
export class CreateUnitComponent implements OnInit {
  unitCategories: IUnitCategory[];
  unitCategorySelected: any;
  formId: any;
  @Input() category: number;
  @Input() submitButton = true;
  @Input() inputValue;
  @Input() hasCategories = true;
  @Output() submitted: EventEmitter<any> = new EventEmitter();
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  constructor(
    private subjectCategoriesService: SubjectCategoryService,
    private fb: FormBuilder,
    private store: Store<any>,
    private unit: UnitService,
    private unitLevel: UnitLevelService,
    private router: Router
  ) {}
  errors: {
    name: string;
    abbr: string;
    subjectLevels: string[];
    unitCategory: string;
  };
  unitForm: FormGroup;
  newForm: boolean;

  ngOnInit() {
    this.newForm = true;
    this.errors = {
      name: '',
      abbr: '',
      subjectLevels: [],
      unitCategory: ''
    };
    this.generateUnitForm();
    this.subjectCategoriesService.getAll().subscribe(items => {
      this.unitCategories = items;
    });
    let activatedRoute: ActivatedRouteSnapshot;
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      const id = activatedRoute.params.id;
      if (this.category) {
        this.generateUnitForm({
          unitCategory: this.category,
          name: '',
          abbr: ''
        });
      } else {
        if (id === undefined) {
          this.newForm = true;
        } else {
          this.newForm = false;
          this.formId = id;
          this.unit
            .get({ id, includeUnitLevels: 1, includeClassLevels: 1 })
            .pipe(
              map(res => {
                return {
                  ...res,
                  unitCategory: Number(res.unit_category_id),
                  abbr: res.abbreviation,
                  subjectLevels: res.unit_levels as Array<any>
                };
              })
            )
            .subscribe(item => {
              this.generateUnitForm(item);
            });
        }
      }
      if (this.inputValue) {
        this.unitForm = this.inputValue;
      }
    }
  }
  generateUnitForm(
    {
      id = null,
      name = '',
      active = true,
      abbr = '',
      description = '',
      subjectLevels = null,
      unitCategory = null
    }: IUnitForm = {
      id: null,
      name: '',
      active: true,
      description: '',
      abbr: '',
      subjectLevels: null,
      unitCategory: null
    }
  ) {
    if (subjectLevels === null) {
      subjectLevels = this.fb.array([this.buildUnitForm()]);
    } else {
      subjectLevels = this.fb.array(
        (subjectLevels as Array<any>).map(item => this.buildUnitForm(item))
      );
    }

    this.unitForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      abbr: [abbr, [Validators.required]],
      description: [description],
      active: [active],
      subjectLevels,
      unitCategory: [unitCategory, Validators.required]
    });
    this.unitForm.valueChanges.subscribe(item => {
      this.valueChange.emit(this.unitForm);
    });
  }
  buildUnitForm(
    item: null | { name: string; id?: number; classLevels?: string } = null
  ) {
    if (item) {
      return this.fb.group({
        id: [item.id],
        name: [item.name, Validators.required],
        classLevels: [item.classLevels]
      });
    } else {
      return this.fb.group({
        name: ['', Validators.required],
        classLevels: ['']
      });
    }
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
  validateUnitCategory() {
    if (
      (this.unitForm.get('unitCategory').dirty ||
        this.unitForm.get('unitCategory').touched) &&
      !this.unitForm.get('unitCategory').valid
    ) {
      if (this.unitForm.get('unitCategory').errors.required) {
        this.errors.unitCategory = 'UnitCategory field is required';
      } else {
        this.errors.unitCategory = null;
      }
    }
  }

  selectedCategory({ source }) {
    const selected = (source as MatSelect).selected;
    const { viewValue } = selected as { viewValue: string };

    this.unitCategorySelected = viewValue;
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
    (this.unitForm.get('subjectLevels') as FormArray).push(
      this.buildUnitForm()
    );
  }
  deleteSubjectLevel(i) {
    const deletionConfirmed = confirm('Are you sure you wish to delete item?');
    if (deletionConfirmed) {
      const items = this.unitForm.get('subjectLevels') as FormArray;
      const ItemId = items.controls[i].value.id;
      items.controls.splice(i, 1);
      this.valueChange.emit(this.unitForm);
      if (ItemId) {
        this.unitLevel.delete(ItemId).subscribe();
      }
    }
  }
  subjectLevels(): FormArray {
    return this.unitForm.get('subjectLevels') as FormArray;
  }
  submit() {
    if (this.unitForm.valid) {
      this.unit.submit(this.unitForm.value).subscribe(() => {
        this.submitted.emit();
        if (this.newForm) {
          this.generateUnitForm();
          this.unitForm.get('name').clearValidators();
          this.unitForm.get('name').updateValueAndValidity();
        } else {
          this.unit
            .get({
              id: this.formId,
              includeUnitLevels: 1,
              includeClassLevels: 1
            })
            .pipe(
              map(res => {
                return {
                  ...res,
                  unitCategory: Number(res.unit_category_id),
                  abbr: res.abbreviation,
                  subjectLevels: res.unit_levels as Array<any>
                };
              })
            )
            .subscribe(item => {
              this.generateUnitForm(item);
            });
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
