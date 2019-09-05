import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Route, Router } from '@angular/router';
import { MenuItemService } from 'src/app/core/menu-item/menu-item.service';
import { Observable } from 'rxjs';
import { BreakpointState, BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, OnChanges {
  isHandset: Observable<BreakpointState> = this.breakPointObserver.observe(Breakpoints.Handset);
  private menuItems: object[];
  @Input() isOpen: boolean;
  @Output() openedChange: EventEmitter<boolean>;
  opened: boolean;
  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private menuItem: MenuItemService,
    private breakPointObserver: BreakpointObserver
    ) {
    this.openedChange = new EventEmitter();
  }

  ngOnInit() {
    this.menuItems = this.menuItem.get();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.opened = changes.isOpen.currentValue;
  }
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  openedChangeHandler(): void {
    this.openedChange.emit(this.opened);
  }

}
