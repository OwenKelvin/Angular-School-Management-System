import { Component, OnInit } from '@angular/core';
import {
  CREATE_CLASS_LEVEL_CURRICULUM,
  EDIT_CLASS_LEVEL_CURRICULUM,
  VIEW_UNIT_CURRICULUM
} from '../../services/menu-items.service';
import { map } from 'rxjs/operators';
import { ClassLevelService } from '../services/class-level.service';
import { Store } from '@ngrx/store';
import { SHOW_SUCCESS_MESSAGE } from 'src/app/store/actions/app.action';

@Component({
  selector: 'app-view-class-levels',
  templateUrl: './view-class-levels.component.html',
  styleUrls: ['./view-class-levels.component.css']
})
export class ViewClassLevelsComponent implements OnInit {

  createClassLevelCurriculum: string;
  editUnitCurriculum: any;
  viewUnitCurriculum: (id: string | number) => string;
  classLevels: any[];
  constructor(private classLevelService: ClassLevelService, private store: Store<any>) { }

  ngOnInit() {
    this.createClassLevelCurriculum = CREATE_CLASS_LEVEL_CURRICULUM;
    this.editUnitCurriculum = EDIT_CLASS_LEVEL_CURRICULUM;
    this.viewUnitCurriculum = VIEW_UNIT_CURRICULUM;
    this.getItems();
  }
  getItems(): void {
    this.classLevelService
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
        this.classLevels = items;
      });
  }
  deleteSubject(subject): void {
    const toBeDeleted = this.classLevels.find(item => item.id === subject);
    const deletionConfirmed = confirm(
      'Are you sure you wish to delete' + toBeDeleted.name
    );
    if (deletionConfirmed) {
      this.classLevelService.delete(toBeDeleted.id).subscribe(
        res => {
          this.store.dispatch({
            type: SHOW_SUCCESS_MESSAGE,
            payload: true
          });
          this.getItems();
        },
        error => {
          // Error Handling done at the Error Interceptor
        }
      );
    }
  }
}
