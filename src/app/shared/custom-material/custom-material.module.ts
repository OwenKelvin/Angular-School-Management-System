import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatMenuModule,
  MatTabsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatTableModule,
  MatChipsModule,
  MatSidenavModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatDialogModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MatTabsModule, ReactiveFormsModule],
  exports: [
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomMaterialModule {}
