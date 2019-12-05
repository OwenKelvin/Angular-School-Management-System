import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelsComponent } from './view-class-levels.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { MessageComponent } from 'src/app/core/message/message.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/reducers';

describe('ViewClassLevelsComponent', () => {
  let component: ViewClassLevelsComponent;
  let fixture: ComponentFixture<ViewClassLevelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CustomMaterialModule,
        HttpClientTestingModule,
        StoreModule.forRoot(reducer)
      ],
      declarations: [ViewClassLevelsComponent, MessageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
