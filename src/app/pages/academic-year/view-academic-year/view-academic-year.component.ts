import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from '../services/academic-year.service';
import {
  VIEW_ACADEMIC_YEAR,
  CREATE_ACADEMIC_YEAR
} from '../services/academic-year-menu-items.service';
import {
  ActivatedRouteSnapshot,
  Router,
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-view-academic-year',
  templateUrl: './view-academic-year.component.html',
  styleUrls: ['./view-academic-year.component.css']
})
export class ViewAcademicYearComponent implements OnInit {
  academicYear: any;
  viewAcademicYearRouter: (id: any) => string;
  createAcademicYearRouter: string;
  constructor(
    private router: Router,
    private academicYearService: AcademicYearService
  ) {}

  ngOnInit() {
    this.academicYear = {};
    let activatedRoute: ActivatedRoute = new ActivatedRoute();
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0];
      activatedRoute.params.subscribe(item => {
        this.academicYearService
          .get({ id: item.id, classLevels: 1 })
          .subscribe(res => {
            this.academicYear = res;
            console.log(res);
          });
      });
    }
  }
}
