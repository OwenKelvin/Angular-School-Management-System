import {
  Component,
  OnInit,
  Input,
  forwardRef,
  SimpleChanges,
  SimpleChange,
  OnChanges
} from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';
import { MatSelect, ErrorStateMatcher, MatOption } from '@angular/material';
import { SubjectCategoryService } from 'src/app/pages/curriculum-maintenance/subject-category/services/subject-category.service';
import { ClassLevelCategoryService } from 'src/app/pages/curriculum-maintenance/class-levels/services/class-level-category.service';
import { ClassLevelService } from 'src/app/pages/curriculum-maintenance/class-levels/services/class-level.service';
import { UnitLevelService } from 'src/app/pages/curriculum-maintenance/units/services/unit-level.service';
import { AcademicYearService } from 'src/app/pages/academic-year/services/academic-year.service';

export class FormErrorStateMatcher implements ErrorStateMatcher {
  constructor() {}
  isErrorState(control: FormControl): boolean {
    return (control.dirty || control.touched) && !control.valid;
  }
}
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent
  implements OnInit, ControlValueAccessor, OnChanges {
  disabled: boolean;
  label: string;
  formControl: FormControl;
  hint: string;
  matcher: FormErrorStateMatcher;
  constructor(
    private subjectCategoriesService: SubjectCategoryService,
    private classLevelsCategoriesService: ClassLevelCategoryService,
    private classLevels: ClassLevelService,
    private unitLevel: UnitLevelService,
    private academicYearService: AcademicYearService
  ) {
    this.matcher = new FormErrorStateMatcher();
    this.formControl = new FormControl();
  }

  @Input() type:
    | 'units'
    | 'units:academic-year'
    | 'academic-years:active'
    | 'class-level-categories'
    | 'class-levels:level'
    | 'unit-levels';
  @Input() value: any;
  @Input() multiple: any;
  @Input() parentId: number;
  multipleSelector = false;

  onChanges: ($value) => void;
  onTouched: () => void;
  error: { required: string };
  categorySelected: string | { id: number; name: string }[];
  categories: Array<any>;
  inputValue;
  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (!this.disabled) {
      if (!isDisabled) {
        this.formControl.enable();
        this.formControl.updateValueAndValidity();
      } else {
        // this.formControl.disable(); // TODO Check why disabled is not working well
        this.disabled = true;
      }
    }
  }

  ngOnInit() {
    if (typeof this.multiple === 'string') {
      this.multipleSelector = true;
    }
    this.error = { required: 'Please Select a Category' };
    this.categorySelected = '';
    this.categories = [];
    switch (this.type) {
      case 'academic-years:active':
        this.label = 'Academic Year';
        this.error.required = 'Academic Year is required';
        this.hint = 'Please select an Academic Year';
        this.academicYearService
          .getFilter({ active: true })
          .subscribe(items => {
            this.categories = items;
          });
        break;
      case 'unit-levels':
        this.label = 'Unit Levels';
        this.error.required = 'Unit Level is required';
        this.hint = 'Please select a unit';
        const data = { unit: null };
        if (this.parentId) {
          data.unit = this.parentId;
        }
        this.unitLevel.getAll(data).subscribe(items => {
          this.categories = items;
          if (this.formControl.value) {
            this.categorySelected = items.find(
              item => item.id === this.formControl.value
            ).name;
          }
        });
        break;
      case 'class-levels:level':
        this.label = 'Class Levels';
        this.error.required = 'Class Level is required';
        this.hint = 'Please select a class level';
        this.classLevels.getAll({ includeLevels: 1 }).subscribe(items => {
          this.categories = items;
          if (this.formControl.value) {
            this.categorySelected = items.find(
              item => item.id === this.formControl.value
            ).name;
          }
        });
        break;
      case 'class-level-categories':
        this.label = 'Unit';
        this.error.required = 'The unit field is required';
        this.hint = 'Please select a unit';
        this.classLevelsCategoriesService.getAll().subscribe(items => {
          this.categories = items;
          if (this.formControl.value) {
            this.categorySelected = items.find(
              item => item.id === this.formControl.value
            ).name;
          }
        });
        break;
      case 'units':
        this.label = 'Unit';
        this.error.required = 'The unit field is required';
        this.hint = 'Please select a unit';
        this.subjectCategoriesService.getAll().subscribe(items => {
          this.categories = items;
          if (this.formControl.value) {
            this.categorySelected = items.find(
              item => item.id === this.formControl.value
            ).name;
          }
        });
        break;
      case 'units:academic-year':
        this.label = 'Units';
        this.error.required = 'The units field is required';
        this.hint = 'Please select units';
        this.unitLevel
          .getFilter({ academicYear: this.parentId })
          .subscribe(items => { this.categories = items; });
        break;
      default:
        this.categories = [];
        break;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    const parentId: SimpleChange = changes.parentId;
    if (parentId) {
      if (this.type === 'units:academic-year') {
        this.unitLevel
          .getFilter({ academicYear: this.parentId })
          .subscribe(items => {
            this.categories = items;
          });
      }
    }
  }
  validate(control: FormControl) {
    this.formControl = control;
  }
  validateField() {
    this.onTouched();
  }
  removeSelect(id) {
    const newValue = (this.formControl.value as Array<any>).filter(
      item => item !== id
    );
    this.categorySelected = (this.categorySelected as Array<any>).filter(
      item => item.id !== id
    );
    this.formControl.setValue(newValue);
  }
  selectedCategory({ source }) {
    const selected = (source as MatSelect).selected;
    if (selected) {
      const { viewValue, value } = selected as {
        viewValue: string;
        value: number;
      };
      if (this.multipleSelector) {
        this.onChanges(this.formControl.value);
        this.categorySelected = (selected as Array<MatOption>).map(item => {
          return { name: item.viewValue, id: item.value };
        });
      } else {
        this.categorySelected = viewValue;
        this.onChanges(value);
      }
    } else {
      this.onChanges(null);
    }
  }
}
