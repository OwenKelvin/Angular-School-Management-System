import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/pages/academic-year/services/subjects.service';
import {
  CREATE_UNIT_CURRICULUM,
  EDIT_UNIT_CURRICULUM,
  VIEW_UNIT_CURRICULUM
} from '../../services/menu-items.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-units',
  templateUrl: './view-units.component.html',
  styleUrls: ['./view-units.component.css']
})
export class ViewUnitsComponent implements OnInit {
  createUnitCurriculum: string;
  editUnitCurriculum: any;
  viewUnitCurriculum: (id: string | number) => string;
  units: any[];
  constructor(private subjects: SubjectsService) {}

  ngOnInit() {
    this.createUnitCurriculum = CREATE_UNIT_CURRICULUM;
    this.editUnitCurriculum = EDIT_UNIT_CURRICULUM;
    this.viewUnitCurriculum = VIEW_UNIT_CURRICULUM;
    this.getItems();
  }
  getItems(): void {
    this.subjects
      .getAll()
      .pipe(
        map(res => {
          if (!res) {
            res = [];
          }
          return (res as Array<any>).map(item => {
            return {
              ...item,
              description: item.description
                ? item.description
                : 'No Description Available!'
            };
          });
        })
      )
      .subscribe(items => {
        this.units = items;
      });
  }
  deleteSubject(subject): void {
    const toBeDeleted = this.units.find(item => item.id === subject);
    const deletionConfirmed = confirm(
      'Are you sure you wish to delete' + toBeDeleted.name
    );
    if (deletionConfirmed) {
      this.subjects.deleteItem(toBeDeleted.id).subscribe(
        res => {
          this.getItems();
        },
        error => {
         // Error Handling done at the Error Interceptor
        }
      );
    }
  }
}
