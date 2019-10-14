import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubjectsService } from '../services/subjects.service';
import { AcademicYearService } from '../services/academic-year.service';

@Component({
  selector: 'app-create-academic-year',
  templateUrl: './create-academic-year.component.html',
  styleUrls: ['./create-academic-year.component.css']
})
export class CreateAcademicYearComponent implements OnInit {
  academicYearForm: any;
  errors: any;

  constructor(
    private fb: FormBuilder,
    private academicYear: AcademicYearService
  ) { }

  ngOnInit() {
    this.errors = {};
    this.academicYearForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
    });
  }
  validateName() {
    if ((this.academicYearForm.get('name').dirty || this.academicYearForm.get('name').touched) &&
      !this.academicYearForm.get('name').valid) {
      if (this.academicYearForm.get('name').errors.required) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = null;
      }
    }
  }
  validateStartDate() {
  if (
    (this.academicYearForm.get('startDate').dirty || this.academicYearForm.get('startDate').touched) &&
    !this.academicYearForm.get('startDate').valid
   ) {
     if (this.academicYearForm.get('startDate').errors.required) {
        this.errors.startDate = 'Start Date field is required';
        } else {
          this.errors.startDate = null;
        }
      }
    }
  validateEndDate() {
    if (
      (this.academicYearForm.get('endDate').dirty || this.academicYearForm.get('endDate').touched) &&
      !this.academicYearForm.get('endDate').valid
    ) {
      if (this.academicYearForm.get('endDate').errors.required) {
        this.errors.endDate = 'End Date field is required';
      } else {
        this.errors.endDate = null;
      }
    }
  }
  submit() {
    if (this.academicYearForm.valid) {
      this.academicYear.save(this.academicYearForm.value).subscribe(
        item => {

        }
      );
    }
  }

}
