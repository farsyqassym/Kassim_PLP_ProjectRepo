import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { LoginComponent } from './forms/login/login.component';
import { RegistrationComponent } from './forms/registration/registration.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { ApplicationComponent } from './pages/application/application.component';
import { AdminComponent } from './pages/admin/admin.component';
import { StaffComponent } from './pages/staff/staff.component';
import { StudentComponent } from './pages/student/student.component';
import { ForbidenComponent } from './pages/forbiden/forbiden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_Auth/auth.guard';
import { AuthInterceptor } from './_Auth/auth.interceptor';
import { UserService } from './_Service/user.service';
import { IdeaComponent } from './pages/idea/idea.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { RepotComponent } from './pages/repot/repot.component';
import { StudentInfoComponent } from './pages/student-info/student-info.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { HeaderComponent } from './pages/header/header.component';
import { AcceptedIdeaComponent } from './pages/accepted-idea/accepted-idea.component';
import { PostingComponent } from './pages/posting/posting.component';
import { StaffRegistrationComponent } from './pages/staff-registration/staff-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainLayoutComponent,
    HomeComponent,
    ApplicationComponent,
    AdminComponent,
    StaffComponent,
    StudentComponent,
    ForbidenComponent,
    IdeaComponent,
    UserManagementComponent,
    EditUserComponent,
    ProfileComponent,
    AccountsComponent,
    RepotComponent,
    StudentInfoComponent,
    ApplicantComponent,
    HeaderComponent,
    AcceptedIdeaComponent,
    PostingComponent,
    StaffRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
