import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-academic-year-allocation',
  templateUrl: './student-academic-year-allocation.component.html',
  styleUrls: ['./student-academic-year-allocation.component.css']
})
export class StudentAcademicYearAllocationComponent implements OnInit {
  academicsDetailsForm: FormGroup;
  errors: any;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.errors = {
      academicYear: null
    };
    this.academicsDetailsForm = this.fb.group({
      academicYear: ['', [Validators.required]],
      units: [[], [Validators.required]]
    });
  }
  validateAcademicYear() {
    if (
      (this.academicsDetailsForm.get('academicYear').dirty ||
        this.academicsDetailsForm.get('academicYear').touched) &&
      !this.academicsDetailsForm.get('academicYear').valid
    ) {
      if (this.academicsDetailsForm.get('academicYear').errors.required) {
        this.errors.academicYear = 'AcademicYear field is required';
      } else {
        this.errors.academicYear = null;
      }
    }
  }
}
