import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MatMenuWrapperComponent } from './mat-menu-wrapper/mat-menu-wrapper.component';



@NgModule({
  declarations: [SidebarComponent, MatMenuWrapperComponent],
  imports: [
    FormsModule,
    CommonModule,
    CustomMaterialModule,
    RouterModule
  ],
  exports: [
    CustomMaterialModule,
    SidebarComponent
  ]
})
export class SharedModule { }
