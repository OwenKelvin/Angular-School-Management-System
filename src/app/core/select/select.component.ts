import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';
import { MatSelect } from '@angular/material';
import { SubjectCategoryService } from 'src/app/pages/curriculum-maintenance/subject-category/services/subject-category.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  disabled: boolean;
  label: string;
  constructor(
    private subjectCategoriesService: SubjectCategoryService,

  ) {}

  @Input() type: 'units';

  onChanges: ($value) => void;
  onTouched: () => void;
  error: string;
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
    this.disabled = isDisabled;
  }

  ngOnInit() {
    switch (this.type) {
      case 'units':
        this.label = 'Select category';
        this.subjectCategoriesService.getAll().subscribe(items => {
          this.categories = items;
        });
        break;
      default:
        this.categories = [];
        break;
    }
    this.categorySelected = '';
    this.categories = [
      { id: 1, name: 'My Name' },
      { id: 2, name: 'My Name 2' },
      { id: 3, name: 'My Name 3' }
    ];
  }
  validate() {
    this.onTouched();
    // if (
    //   (this.control.get('name').dirty || this.control.get('name').touched) &&
    //   !this.control.get('name').valid
    // ) {
    //   if (this.control.get('name').errors.required) {
    //     this.error = 'label field is required';
    //   } else {
    //     this.error = null;
    //   }
    // }
  }
  selectedCategory({ source }) {
    const selected = (source as MatSelect).selected;
    const { viewValue, value } = selected as { viewValue: string, value: number };
    this.categorySelected = viewValue;
    this.onChanges(value);
  }
}
