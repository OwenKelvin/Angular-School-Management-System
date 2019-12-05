import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  // username: FormControl = new FormControl('info@furahacapital.com');
  // password: FormControl = new FormControl('Password1');
  username: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  rememberMe: FormControl = new FormControl(false);
  submitted = false;
  loading = false;
  validators = {
    username: [Validators.required, Validators.minLength(4)],
    password: Validators.required
  };
  errors = {
    username: null,
    password: null
  };
  returnUrl: string;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [this.username.value, this.validators.username],
      password: [this.password.value, this.validators.password],
      rememberMe: [this.rememberMe.value]
    });

    this.loginForm.get('username').valueChanges.subscribe(value => {
      if (this.errors.username) {
        this.validateUsername();
      }
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  validateUsername() {
    if ((this.loginForm.get('username').dirty || this.loginForm.get('username').touched) &&
      !this.loginForm.get('username').valid) {
      if (this.loginForm.get('username').errors.required) {
        this.errors.username = 'Username is required';
      } else if (this.loginForm.get('username').errors.minlength) {
        this.errors.username = 'Username must have at least 4 characters';
      } else {
        this.errors.username = null;
      }
    }
  }
  submit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.loading = true;
      const loginData = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
        rememberMe: this.loginForm.get('rememberMe').value,
      };
      this.authenticationService.login(loginData)
        .pipe(first())
        .subscribe(
          data => {
            alert('Ok')
            this.router.navigate([this.returnUrl]);
          },
          error => {
            // this.alertService.error(error);
            this.loading = false;
          });
    }
  }

}
