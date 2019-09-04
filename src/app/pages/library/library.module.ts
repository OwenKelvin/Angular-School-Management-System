import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';


@NgModule({
  declarations: [AddBookComponent, EditBookComponent, ViewBooksComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ]
})
export class LibraryModule { }
