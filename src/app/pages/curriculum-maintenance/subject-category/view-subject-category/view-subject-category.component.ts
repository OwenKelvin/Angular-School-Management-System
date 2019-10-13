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
  constructor(
    private router: Router,
    private subjectCategory: SubjectCategoryService,
  ) { }

  ngOnInit() {
    const activatedRoute: ActivatedRouteSnapshot = this.router.routerState.root.children[0].children[0].children[0].snapshot;
    const id = activatedRoute.params.id;
    this.currentSubjectCategory = {};
    this.subjectCategory.get(id).subscribe(item => {
      this.currentSubjectCategory = item;
      console.log(item)
    });
  }

}
