import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-menu-wrapper',
  templateUrl: './mat-menu-wrapper.component.html',
  styleUrls: ['./mat-menu-wrapper.component.less']
})
export class MatMenuWrapperComponent implements OnInit {
  @Input() matMenuItem: any;
  constructor() {
  }

  ngOnInit() {
  }

}
