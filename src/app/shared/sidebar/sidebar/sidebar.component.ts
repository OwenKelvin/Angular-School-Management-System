import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() isOpen: boolean;
  @Output() openedChange: EventEmitter<boolean>;
  opened: boolean;
  constructor(private auth: AuthenticationService, private router: Router) {
    this.openedChange = new EventEmitter();
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.opened = changes.isOpen.currentValue;
  }
  logout(): void{
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  openedChangeHandler(): void {
    this.openedChange.emit(this.opened);
  }

}
