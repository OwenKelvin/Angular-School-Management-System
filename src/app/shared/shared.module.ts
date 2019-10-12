import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatMenuWrapperComponent } from './mat-menu-wrapper/mat-menu-wrapper.component';
import { SnackBarComponent, SnackbarTemplateComponent } from './snackbar/snackbar.component';



@NgModule({
  declarations: [SidebarComponent, MatMenuWrapperComponent, SnackBarComponent, SnackbarTemplateComponent],
  imports: [
    FormsModule,
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    CustomMaterialModule,
    SidebarComponent,
    SnackBarComponent,
    SnackbarTemplateComponent
  ],
  entryComponents: [SnackbarTemplateComponent],
})
export class SharedModule { }
