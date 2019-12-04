import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import {
  CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM,
  EDIT_CLASS_LEVEL_CATEGORY_CURRICULUM,
  VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM
} from '../../services/menu-items.service';
import { ClassLevelCategoryService } from '../services/class-level-category.service';

export interface IUnitCategory {
  id: number;
  name: string;
  active: boolean | 0 | 1 | null | undefined;
  description?: string;

}

@Component({
  selector: 'app-view-class-level-categories',
  templateUrl: './view-class-level-categories.component.html',
  styleUrls: ['./view-class-level-categories.component.css']
})

export class ViewClassLevelCategoriesComponent implements OnInit {
  classLevelCategories: IUnitCategory[];

  createClassLevelCategoryCurriculum: string;
  editClassLevelCategoryCurriculum: any;
  viewClassLevelCategoryCurriculum: (id: string | number) => string;
  constructor(
    private classLevelCategory: ClassLevelCategoryService,

  ) { }

  ngOnInit() {
    this.createClassLevelCategoryCurriculum = CREATE_CLASS_LEVEL_CATEGORY_CURRICULUM;
    this.editClassLevelCategoryCurriculum = EDIT_CLASS_LEVEL_CATEGORY_CURRICULUM;
    this.viewClassLevelCategoryCurriculum = VIEW_CLASS_LEVEL_CATEGORY_CURRICULUM;
    this.getItems();
  }
  getItems(): void {
    this.classLevelCategory.getAll().pipe(map(res => {
      if (!res) {
        res = [];
      }
      return res.map(item => {
        return { ...item, description: item.description ? item.description : 'No Description Available!' };
      });
    })).subscribe(items => {
      this.classLevelCategories = items;
    });
  }
  deleteClassLevelCategory(category): void {
    const toBeDeleted = this.classLevelCategories.find(item => item.id === category);
    const deletionConfirmed = confirm('Are you sure you wish to delete' + toBeDeleted.name);
    if (deletionConfirmed) {
      this.classLevelCategory.delete(toBeDeleted.id).subscribe(res => {
        this.getItems();
      });
    }
  }

}
