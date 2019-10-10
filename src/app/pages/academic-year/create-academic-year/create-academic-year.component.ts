import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SubjectsService } from '../services/subjects.service';

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
    private subjects: SubjectsService
  ) { }

  ngOnInit() {
    this.errors = {};
    this.academicYearForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: [''],
      endDate: [''],
    });
  }
  validateName(i) {

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
  }
  validateEndDate() {
  }
  submit() {

  }

}
