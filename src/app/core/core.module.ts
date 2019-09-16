import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorMessageTopBarComponent } from './error-message-top-bar/error-message-top-bar.component';
import { MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  declarations: [ ErrorDialogComponent, ErrorMessageTopBarComponent],
  exports: [ErrorDialogComponent, ErrorMessageTopBarComponent],
  providers: [ AuthGuard ],
})
export class CoreModule { }
