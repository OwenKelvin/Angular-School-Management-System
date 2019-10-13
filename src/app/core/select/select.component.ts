import {
  Component,
  OnInit,
  Input,
  forwardRef} from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS} from '@angular/forms';
import { MatSelect, ErrorStateMatcher } from '@angular/material';
import { SubjectCategoryService } from 'src/app/pages/curriculum-maintenance/subject-category/services/subject-category.service';

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
export class SelectComponent implements OnInit, ControlValueAccessor {
  disabled: boolean;
  label: string;
  formControl: FormControl;
  hint: string;
  matcher: FormErrorStateMatcher;
  constructor(private subjectCategoriesService: SubjectCategoryService) {
    this.matcher = new FormErrorStateMatcher();
    this.formControl = new FormControl();
  }

  @Input() type: 'units';
  @Input() value: 'units';

  onChanges: ($value) => void;
  onTouched: () => void;
  error: { required: string };
  categorySelected: string;
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
    // this.disabled = isDisabled;
  }

  ngOnInit() {
    this.error = { required: 'Please Select a Category' };
    this.categorySelected = '';
    this.categories = [];
    switch (this.type) {
      case 'units':
        this.label = 'Unit';
        this.error.required = 'The unit field is required';
        this.hint = 'Please select a unit';
        this.subjectCategoriesService.getAll().subscribe(items => {
          this.categories = items;
          if (this.formControl.value) {
            this.categorySelected = items.find(item => item.id === this.formControl.value).name;
          }
        });
        break;
      default:
        this.categories = [];
        break;
    }
  }
  validate(control: FormControl) {
    this.formControl = control;
  }
  validateField() {
    this.onTouched();
  }
  selectedCategory({ source }) {
    const selected = (source as MatSelect).selected;
    if (selected) {
      const { viewValue, value } = selected as {
        viewValue: string;
        value: number;
      };
      this.categorySelected = viewValue;
      this.onChanges(value);
    } else {
      if (this.formControl.errors) {
      }
      this.onChanges(null);
    }
  }
}
