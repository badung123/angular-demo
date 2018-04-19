import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MemberListComponent} from "./member-list/member-list.component";
import {AuthGuardService} from "../shared/auth/auth-guard.service";
import {DepartmentListComponent} from "./department-list/department-list.component";

const routes: Routes = [
  {
    path: 'members',
    children: [
      {path: '', component: MemberListComponent, canActivate: [AuthGuardService]},
      {path: 'login', component: LoginComponent},
      {path: 'department', component: DepartmentListComponent, canActivate: [AuthGuardService]}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {
}
