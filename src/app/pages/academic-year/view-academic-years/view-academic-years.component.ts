import { Component, OnInit } from '@angular/core';
import { AcademicYearService } from '../services/academic-year.service';
import { VIEW_ACADEMIC_YEAR, CREATE_ACADEMIC_YEAR } from '../services/academic-year-menu-items.service';

@Component({
  selector: 'app-view-academic-years',
  templateUrl: './view-academic-years.component.html',
  styleUrls: ['./view-academic-years.component.css']
})
export class ViewAcademicYearsComponent implements OnInit {
  academicYears: any;
  viewAcademicYearRouter: (id: any) => string;
  createAcademicYearRouter: string;
  constructor(private academicYearService: AcademicYearService) {}

  ngOnInit() {
    this.viewAcademicYearRouter = VIEW_ACADEMIC_YEAR;
    this.createAcademicYearRouter = CREATE_ACADEMIC_YEAR;
    this.academicYears = [];
    this.academicYearService.getAll().subscribe(items => {
      this.academicYears = items;
    });
  }
}
