import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorMessageTopBarComponent } from './error-message-top-bar/error-message-top-bar.component';
import { MatIconModule } from '@angular/material';
import { MessageComponent } from './message/message.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  declarations: [ ErrorDialogComponent, ErrorMessageTopBarComponent, MessageComponent],
  exports: [ErrorDialogComponent, ErrorMessageTopBarComponent, MessageComponent],
  providers: [ AuthGuard ],
})
export class CoreModule { }
