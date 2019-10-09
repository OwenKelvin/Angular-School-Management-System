import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-snackbar-template',
  templateUrl: 'snackbar.template.component.html',
  styles: [``],
})
export class SnackbarTemplateComponent { }

/**
 * @title Snack-bar with a custom component
 */
@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['snackbar.component.css'],
})
export class SnackBarComponent implements OnInit {
  durationInSeconds = 4;

  constructor(private snackBar: MatSnackBar, private store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(select(state => state.app)).subscribe(app => {
      if (app && app.showSuccessMessage) {
        this.openSnackBar();
      }
    });
  }
  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarTemplateComponent, {
      duration: this.durationInSeconds * 1000,
      panelClass: ['snackbar', 'snackbar-success']
    });
  }
}

