import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { UnitService } from '../services/unit.service';

@Component({
  selector: 'app-view-unit',
  templateUrl: './view-unit.component.html',
  styleUrls: ['./view-unit.component.css']
})
export class ViewUnitComponent implements OnInit {
  unit;
  id: any;
  isOpenNewClassLevelForm: boolean;
  constructor(private router: Router, private unitService: UnitService) {}

  ngOnInit() {
    this.unit = { units: null };
    let activatedRoute: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();

    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0] &&
      this.router.routerState.root.children[0].children &&
      this.router.routerState.root.children[0].children[0].children
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      this.id = activatedRoute.params.id;
      this.unit = {};
      this.unitService.get({ id: this.id, classLevel: 1 }).subscribe(item => {
        this.unit = item;
      });
    }
  }
}
