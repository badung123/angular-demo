import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MemberRoutingModule} from './member-routing.module';
import {LoginComponent} from './login/login.component';
import {SharedModule} from '../shared/shared.module';
import { MemberListComponent } from './member-list/member-list.component';
import {DepartmentListComponent} from "./department-list/department-list.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MemberRoutingModule
  ],
  exports: [],
  declarations: [LoginComponent, MemberListComponent, DepartmentListComponent],
  providers: []
})
export class MemberModule {
}
