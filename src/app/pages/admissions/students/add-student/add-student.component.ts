import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less']
})
export class AddStudentComponent implements OnInit {
  step = 0;
  submitStudentIdentificationInfo: boolean;
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
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
