import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    FormsModule,
    CommonModule,
    CustomMaterialModule,
  ],
  exports: [
    CustomMaterialModule,
    SidebarComponent
  ]
})
export class SharedModule { }
