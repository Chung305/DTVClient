import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from 'src/app/clientView/components/register-user/register-user.component';
import { LoginComponent } from 'src/app/adminView/components/login/login.component';
import { ReportedConcernsDisplayComponent } from './clientView/components/reported-concerns-display/reported-concerns-display.component';
import { ReportAConcernComponent } from './clientView/components/report-a-concern/report-a-concern.component';
import { AdminRegisterComponent } from './adminView/components/admin-register/admin-register.component';
import { LiveFeedComponent } from './adminView/components/live-feed/live-feed.component';
import { RequestAmbassadorComponent } from './clientView/components/request-ambassador/request-ambassador.component';
import { ClientHomeComponent } from './clientView/components/client-home/client-home.component';
import { RequestAmbassadorDisplayComponent } from './clientView/components/request-ambassador-display/request-ambassador-display.component';
import { AdminHomeComponent } from './adminView/components/admin-home/admin-home.component';
import { ClosedRequestsComponent } from './adminView/components/closed-requests/closed-requests.component';
import { ClosedReportsComponent } from './adminView/components/closed-reports/closed-reports.component';
import { EditRequestsComponent } from './adminView/components/edit-requests/edit-requests.component';
import { EditReportsComponent } from './adminView/components/edit-reports/edit-reports.component';



const routes: Routes = [
  { path: '', component: ClientHomeComponent },
  { path: 'admin/login', component: LoginComponent},
  { path: 'admin/register', component: AdminRegisterComponent},
  { path: 'admin/logged-in', component: LiveFeedComponent},
  { path: 'register', component: RegisterUserComponent},
  { path: 'admin/reports-display', component: ReportedConcernsDisplayComponent},
  { path: 'create-report', component: ReportAConcernComponent},
  { path: 'request-ambassador', component: RequestAmbassadorComponent},
  { path: 'client-home', component: ClientHomeComponent},
  { path: 'admin/ambassador-requests', component: RequestAmbassadorDisplayComponent},
  { path: 'admin', component: AdminHomeComponent},
  { path: 'admin/ambassador-requests/closed', component: ClosedRequestsComponent},
  { path: 'admin/reports-display/closed', component: ClosedReportsComponent},
  { path: 'admin/ambassador-requests/edit', component: EditRequestsComponent},
  { path: 'admin/reports-display/edit', component: EditReportsComponent},

    // if no route, redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
