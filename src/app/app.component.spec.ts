import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ErrorMessageTopBarComponent } from './core/error-message-top-bar/error-message-top-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './core/error-dialog/error-dialog.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        SharedModule,
        StoreModule.forRoot(reducer)
      ],
      declarations: [
        AppComponent,
        ErrorMessageTopBarComponent,
        ErrorDialogComponent
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: { entryComponents: [ErrorDialogComponent] }
      })
      .compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as function 'openDialog'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   spyOn(app, 'openDialog');
  //   app.openDialog();
  //   expect(app.openDialog).toHaveBeenCalled();
  // });
  it(`should have as function 'openDialog'`, () => {
    const dialog = jasmine.createSpyObj({open: () => {}});
    const appComponent = new AppComponent(dialog);
    appComponent.openDialog();
    expect(dialog.open).toHaveBeenCalled();
  });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to FsmsApp!');
  // });
});
