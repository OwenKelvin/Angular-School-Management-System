import { Component, OnInit } from '@angular/core';
import { SubjectCategoryService } from '../services/subject-category.service';
import { map } from 'rxjs/operators';
import {
  CREATE_UNIT_CATEGORY_CURRICULUM,
  EDIT_UNIT_CATEGORY_CURRICULUM,
  VIEW_UNIT_CATEGORY_CURRICULUM
} from '../../services/menu-items.service';

export interface IUnitCategory {
  id: number;
  name: string;
  active: boolean | 0 | 1 | null | undefined;
  description?: string;

}
@Component({
  selector: 'app-view-subject-categories',
  templateUrl: './view-subject-categories.component.html',
  styleUrls: ['./view-subject-categories.component.css']
})

export class ViewSubjectCategoriesComponent implements OnInit {
  unitCategories: IUnitCategory[];
  createUnitCategoryCurriculum: string;
  editUnitCategoryCurriculum: any;
  viewUnitCategoryCurriculum: (id: string | number) => string;
  constructor(
    private subjectCategories: SubjectCategoryService
  ) { }

  ngOnInit() {
    this.createUnitCategoryCurriculum = CREATE_UNIT_CATEGORY_CURRICULUM;
    this.editUnitCategoryCurriculum = EDIT_UNIT_CATEGORY_CURRICULUM;
    this.viewUnitCategoryCurriculum = VIEW_UNIT_CATEGORY_CURRICULUM;
    this.getItems();
  }
  getItems(): void {
    this.subjectCategories.getAll().pipe(map(res => {
      if (!res) {
        res = [];
      }
      return res.map(item => {
        return { ...item, description: item.description ? item.description : 'No Description Available!' };
      });
    })).subscribe(items => {
      this.unitCategories = items;
    });
  }
  deleteSubjectCategory(category): void {
    const toBeDeleted = this.unitCategories.find(item => item.id === category);
    const deletionConfirmed = confirm('Are you sure you wish to delete' + toBeDeleted.name);
    if (deletionConfirmed) {
      this.subjectCategories.deleteItem(toBeDeleted.id).subscribe(res => {
        this.getItems();
      });
    }
  }

}
