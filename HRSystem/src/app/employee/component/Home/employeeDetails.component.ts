import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../module/IEmployee';
import { EmployeeService } from '../../services/employeeService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employeeDetails',
    templateUrl: './employeeDetails.component.html',
    styleUrls: ['./employeeDetails.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
    
    constructor(private employeeSerivce: EmployeeService,private router :Router) { }
    page: number = 1;
    pageSize: number = 30;
    EmployeeList: IEmployee[] = [];
    ngOnInit(): void {
        this.GetEmployeeDetails()
    }
    GetEmployeeDetails() {
        this.employeeSerivce.getEmployeeDetails(this.page, this.pageSize).subscribe(
            (response) => {
                this.EmployeeList = response;
                console.log(this.EmployeeList)
            }
        ), () => {
            alert('Error loading EmployeeList');

        }
    }

    goToAttendence(selectedEmpId:number){
        console.log(selectedEmpId,"===selectedEmpId==");
        
        this.router.navigate(['/attendence',selectedEmpId]);
    }
}