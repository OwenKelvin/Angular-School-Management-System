import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorsModule } from './errors/errors.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/effects/app.effects';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ErrorDialogComponent } from './core/error-dialog/error-dialog.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorsModule,
    PagesModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  exports: [
    // SharedModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // RouterModule,
    // FormsModule'
    SidebarComponent,
    // ErrorDialogComponent
    CoreModule
  ],
  declarations: [
    AppComponent,
    // ErrorDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
