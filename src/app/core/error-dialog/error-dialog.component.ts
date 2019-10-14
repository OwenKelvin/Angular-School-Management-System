import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface IDialogData {
  title: string;
  message: string;
  type: string;
}

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})

export class ErrorDialogComponent implements OnInit {
  dialogText: any;
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.dialogText = {
      message: ''
    };
    this.dialogRef.afterClosed().subscribe(result => {
    });
  }

}

// export class ErrorDialogComponent implements OnInit {

//   constructor(
//     public dialogRef: MatDialogRef<ErrorDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: IDialogData) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//   ngOnInit() {
//   }

// }
