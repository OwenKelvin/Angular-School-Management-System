import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SubjectsService } from '../services/subjects.service';
import { AcademicYearService } from '../services/academic-year.service';
import { ClassLevelService } from '../../curriculum-maintenance/class-levels/services/class-level.service';
import { UnitService } from '../../curriculum-maintenance/units/services/unit.service';
import { UnitLevelService } from '../../curriculum-maintenance/units/services/unit-level.service';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-create-academic-year',
  templateUrl: './create-academic-year.component.html',
  styleUrls: ['./create-academic-year.component.css']
})
export class CreateAcademicYearComponent implements OnInit {
  academicYearForm: any;
  errors: any;
  classLevels: any[];
  // units: any[];
  unitLevels: any;
  constructor(
    private fb: FormBuilder,
    private academicYear: AcademicYearService,
    private classLevel: ClassLevelService,
    private unit: UnitService,
    private subjectService: SubjectsService,
    private unitLevelsService: UnitLevelService,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.errors = {};
    this.academicYearForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      units: this.fb.array([])
    });
    // this.classLevel.getAll({ includeUnits: 1 }).subscribe(items => {
    //   // this.classLevels = items;
    // });
    this.unitLevelsService.getAll().subscribe(items => {
      this.unitLevels = items;
    });

    this.classLevel.getAll({ includeUnits: 1, includeLevels: 1 }).subscribe(items => {
      this.getUnits(items).controls.forEach(element => {
        this.units.push(element);
      });
    });
  }
  generateForm() {
    this.academicYearForm = this.fb.group({
      name: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      units: this.fb.array([])
    });
    this.unitLevelsService.getAll().subscribe(items => {
      this.unitLevels = items;
    });

    this.classLevel
      .getAll({ includeUnits: 1, includeLevels: 1 })
      .subscribe(items => {
        this.getUnits(items).controls.forEach(element => {
          this.units.push(element);
        });
      });
  }
  get units() {
    return this.academicYearForm.get('units');
  }
  getUnits(items) {
    return this.fb.array(
      items.map(item => {
        return this.fb.group({
          subjectId: [item.id],
          subject: [item.name],
          value: [],
          subjectLevel: [{ value: null, disabled: true }, []]
        });
      })
    );
  }
  validateName() {
    if (
      (this.academicYearForm.get('name').dirty ||
        this.academicYearForm.get('name').touched) &&
      !this.academicYearForm.get('name').valid
    ) {
      if (this.academicYearForm.get('name').errors.required) {
        this.errors.name = 'Name is required';
      } else {
        this.errors.name = null;
      }
    }
  }
  validateStartDate() {
    if (
      (this.academicYearForm.get('startDate').dirty ||
        this.academicYearForm.get('startDate').touched) &&
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
      (this.academicYearForm.get('endDate').dirty ||
        this.academicYearForm.get('endDate').touched) &&
      !this.academicYearForm.get('endDate').valid
    ) {
      if (this.academicYearForm.get('endDate').errors.required) {
        this.errors.endDate = 'End Date field is required';
      } else {
        this.errors.endDate = null;
      }
    }
  }
  selectionChange(i) {
    if (this.units.controls[i].get('value').value) {
      this.units.controls[i].get('subjectLevel').enable();
    } else {
      this.units.controls[i].get('subjectLevel').disable();
    }
  }
  submit() {
    const classLevels = this.units.value.map(item => {
      return {
        ...item,
        class_level_id: item.subjectId,
        subject_levels: item.subjectLevel
      };
    });
    const data = {
      ...this.academicYearForm.value,
      class_levels: classLevels
    };
    if (this.academicYearForm.valid) {
      this.academicYear.save(data).subscribe(item => {
        this.generateForm();
        this.store.dispatch({
          type: SHOW_SUCCESS_MESSAGE,
          payload: true
        });
      });
    } else {
    }
  }
}
