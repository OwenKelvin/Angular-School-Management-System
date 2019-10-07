import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less']
})
export class AddStudentComponent implements OnInit {
  step = 0;
  idNumber: string | number | null | undefined;
  submitStudentIdentificationInfo: boolean;
  constructor(
    private cd: ChangeDetectorRef,
    private store: Store<any>,
  ) { }

  ngOnInit() {
    this.store.pipe(select(state => state.admissions)).subscribe(
      app => {
        this.idNumber = app ? app.student_id_number : null;
      });
  }
  setStep(index: number) {
    this.step = index;
  }
  identificationSubmittedHandler($event) {
    if ($event) {
      this.nextStep() ;
    }
    this.submitStudentIdentificationInfo = false;
    // this.nextStep();
  }

  nextStep() {
    this.step += 1;
  }

  prevStep() {
    this.step -= 1;
  }
  saveStudentIdentificationInfo() {
    this.submitStudentIdentificationInfo = true;
    this.cd.detectChanges();
  }
}
