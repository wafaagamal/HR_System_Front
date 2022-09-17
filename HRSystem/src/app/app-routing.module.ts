import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendenceComponent } from './employee/component/Attendence/attendence.component';
import { EmployeeComponent } from './employee/component/employee.component';
import { EmployeeDetailsComponent } from './employee/component/Home/employeeDetails.component';

const routes: Routes = [
  {
    path: "add", component: EmployeeComponent, 
    //children: [
    //   { path: 'attendence/:id', component: AttendenceComponent },
    // ]
  },
  {
    path: "", component: EmployeeDetailsComponent
  },
  { path: 'attendence/:id', component: AttendenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
