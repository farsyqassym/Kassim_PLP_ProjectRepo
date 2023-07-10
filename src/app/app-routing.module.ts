import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { StaffComponent } from './pages/staff/staff.component';
import { LoginComponent } from './forms/login/login.component';
import { ForbidenComponent } from './pages/forbiden/forbiden.component';
import { AuthGuard } from './_Auth/auth.guard';
import { HeaderComponent } from './pages/header/header.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { RegistrationComponent } from './forms/registration/registration.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { RepotComponent } from './pages/repot/repot.component';
import { StudentInfoComponent } from './pages/student-info/student-info.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { AcceptedIdeaComponent } from './pages/accepted-idea/accepted-idea.component';
import { PostingComponent } from './pages/posting/posting.component';
import { StaffRegistrationComponent } from './pages/staff-registration/staff-registration.component';


const routes: Routes = [
{path: '', component: HeaderComponent},
{ path: "login", component: LoginComponent },
{ path: 'registration', component: RegistrationComponent},

{path: 'main',component:MainLayoutComponent,
children: [
  { path: 'admin',component: AdminComponent,canActivate:[AuthGuard], data:{roles:['Admin']}},
  { path: 'staff', component: StaffComponent,canActivate:[AuthGuard], data:{roles:['Staff']}},
  { path: 'applicant', component: ApplicantComponent, canActivate:[AuthGuard], data:{roles:['Applicant']} },
  { path: 'idea', component: IdeaComponent},
  { path: 'user_management', component: UserManagementComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'accounts', component: AccountsComponent},
  { path: 'report', component: RepotComponent},
  { path: 'student_info', component: StudentInfoComponent},
  { path: 'acceptedIdea', component: AcceptedIdeaComponent},
  { path: 'posting', component: PostingComponent},
  { path: 'staff_registration', component: StaffRegistrationComponent}
]
},
  
{ path: "forbiden", component: ForbidenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
