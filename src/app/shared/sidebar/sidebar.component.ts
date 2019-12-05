import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { MenuItemService } from 'src/app/core/menu-item/menu-item.service';
import { Observable } from 'rxjs';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, OnChanges {
  isHandset: Observable<BreakpointState> = this.breakPointObserver.observe(Breakpoints.Handset);
  menuItems: object[];
  // @Input() isOpen: boolean;
  // @Output() openedChange: EventEmitter<boolean>;
  opened: boolean;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private menuItem: MenuItemService,
    private breakPointObserver: BreakpointObserver,
    private store: Store<any>
    ) {
    // TODO unsubscribe
    this.store.pipe(select('app')).subscribe(
      sidebar => {
        if (sidebar) {
          this.opened = sidebar = sidebar.showSideBar;
        } else {
          // this.opened = true;
        }
      }
    );
  }

  ngOnInit() {
    this.menuItems = this.menuItem.get();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.opened = changes.isOpen.currentValue;
    this.store.dispatch({
      type: '[APP STATE] toggle side bar',
      payload: this.opened
    });
  }
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  openedChangeHandler(): void {
    this.store.dispatch({
      type: '[APP STATE] toggle side bar',
      payload: this.opened
    });
  }

}
