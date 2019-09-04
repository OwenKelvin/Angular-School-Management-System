import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuWrapperComponent } from '../shared/mat-menu-wrapper/mat-menu-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatMenuModule,
        MatIconModule,
        MatToolbarModule,
        RouterTestingModule,
        MatListModule,
        MatSidenavModule,
        HttpClientModule
      ],
      declarations: [
        PagesComponent, SidebarComponent,  MatMenuWrapperComponent
      ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
