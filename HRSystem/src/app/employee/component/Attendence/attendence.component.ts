import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employeeService';
import { IAttendences } from '../../module/IAttendences';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-attendence',
    templateUrl: './attendence.component.html',
    styleUrls: ['./attendence.component.css']
})

export class AttendenceComponent implements OnInit {

    constructor(private employeeSerivce: EmployeeService,
        private route: ActivatedRoute) { }
    page: number = 1;
    pageSize: number = 30;
    empId:any;
    AttendenceList: any = [];
    ngOnInit(): void {
        this.empId = this.route.snapshot.paramMap.get('id');
        this.GetEmployeeAttendences()
    }
    GetEmployeeAttendences() {
        this.employeeSerivce.GetEmployeeAttendences(this.empId).subscribe(
            (response) => {
                this.AttendenceList = response;
                console.log(this.AttendenceList)
            }
        ), () => {
            alert('Error loading AttendenceList');

        }
    }
    SignIn(){
        this.employeeSerivce.SignIn(this.empId).subscribe(
            (response) => {
            }
        ), () => {
            alert('Error loading AttendenceList');

        }
    }
    SignOut(){
        this.employeeSerivce.SignOut(this.empId).subscribe(
            (response) => {
            }
        ), () => {
            alert('Error loading AttendenceList');

        }
    }

}