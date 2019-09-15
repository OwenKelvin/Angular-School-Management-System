import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  declarations: [ ErrorDialogComponent],
  exports: [  ErrorDialogComponent],
  providers: [ AuthGuard ],
})
export class CoreModule { }
