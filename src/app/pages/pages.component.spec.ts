import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuWrapperComponent } from '../shared/mat-menu-wrapper/mat-menu-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from '../shared/custom-material/custom-material.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../store/reducers';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        CustomMaterialModule,
        StoreModule.forRoot(reducer),
      ],
      declarations: [
        PagesComponent, SidebarComponent,  MatMenuWrapperComponent, UserProfileComponent
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
