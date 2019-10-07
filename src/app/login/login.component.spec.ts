import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        MatIconModule
      ],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a heading with the word Login', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('header').textContent).toContain('Login');
  });

  it('should have a label with the text content of username', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label[for=username]').textContent).toContain('Username');
  });

  it('should have a label with the text content of password', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label[for=password]').textContent).toContain('Password');
  });

  it('should have a label with the text content of remember me', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label[for=remember_me]').textContent).toContain('Remember me');
  });

  it(`should have as username ''`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.username instanceof FormControl).toBeTruthy();
    expect(app.username.value).toEqual('');
  });

  it(`should have as password ''`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.password.value).toEqual('');
  });

  it(`should have a rememberMe input equal to false`, () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.rememberMe.value).toEqual(false);
    expect(app.loginForm.get('rememberMe').value).toEqual(false);
  });

});
