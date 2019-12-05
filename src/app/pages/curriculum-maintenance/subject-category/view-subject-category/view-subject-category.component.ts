import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { SubjectCategoryService } from '../services/subject-category.service';

@Component({
  selector: 'app-view-subject-category',
  templateUrl: './view-subject-category.component.html',
  styleUrls: ['./view-subject-category.component.css']
})
export class ViewSubjectCategoryComponent implements OnInit {
  currentSubjectCategory;
  id: any;
  isOpenNewSubjectForm: boolean;
  constructor(
    private router: Router,
    private subjectCategory: SubjectCategoryService
  ) {}

  ngOnInit() {
    this.currentSubjectCategory = { units: null };
    let activatedRoute: ActivatedRouteSnapshot;
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      this.id = activatedRoute.params.id;
      this.currentSubjectCategory = {};
      this.subjectCategory.get({ id: this.id }).subscribe(item => {
        this.currentSubjectCategory = item;
      });
    }
  }
  onNewSubjectSubmitted($event) {
    this.isOpenNewSubjectForm = false;
    this.subjectCategory.get({ id: this.id }).subscribe(item => {
      this.currentSubjectCategory = item;
    });
  }
  closeNewSubjectForm() {
    const formClosingConfirmed = confirm('Do you wish to close the form?');
    if (formClosingConfirmed) {
      this.isOpenNewSubjectForm = false;
    }
  }
}
