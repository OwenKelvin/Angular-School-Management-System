import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorMessageTopBarComponent } from './error-message-top-bar/error-message-top-bar.component';
import { MessageComponent } from './message/message.component';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { SelectComponent } from '../core/select/select.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CustomMaterialModule],
  declarations: [
    ErrorDialogComponent,
    ErrorMessageTopBarComponent,
    MessageComponent,
    SelectComponent
  ],
  exports: [
    ErrorDialogComponent,
    ErrorMessageTopBarComponent,
    MessageComponent,
    SelectComponent,
  ],
  providers: [
    AuthGuard,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class CoreModule {}
