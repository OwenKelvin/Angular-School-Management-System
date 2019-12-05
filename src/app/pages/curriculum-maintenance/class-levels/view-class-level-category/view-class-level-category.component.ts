import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { ClassLevelCategoryService } from '../services/class-level-category.service';

@Component({
  selector: 'app-view-class-level-category',
  templateUrl: './view-class-level-category.component.html',
  styleUrls: ['./view-class-level-category.component.css']
})
export class ViewClassLevelCategoryComponent implements OnInit {
  classLevelCategory;
  id: any;
  isOpenNewClassLevelForm: boolean;
  constructor(
    private router: Router,
    private classLevelCategoryService: ClassLevelCategoryService
  ) {}

  ngOnInit() {
    this.classLevelCategory = { units: null };
    let activatedRoute: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      this.id = activatedRoute.params.id;
      this.classLevelCategory = {};
      this.classLevelCategoryService
        .get({ id: this.id, classLevel: 1 })
        .subscribe(item => {
          this.classLevelCategory = item;
        });
    }
  }
  onNewClassLevelSubmitted($event) {
    this.isOpenNewClassLevelForm = false;
    this.classLevelCategoryService
      .get({ id: this.id, classLevel: 1 })
      .subscribe(item => {
        this.classLevelCategory = item;
      });
  }
  closeNewClassLevelForm() {
    const formClosingConfirmed = confirm('Do you wish to close the form?');
    if (formClosingConfirmed) {
      this.isOpenNewClassLevelForm = false;
    }
  }
}
