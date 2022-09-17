import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../services/employeeService';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public MangerList:any;
  public employeeData = this.createForm();
  constructor(private employeeSerivce :EmployeeService) { }

  ngOnInit(): void {
    this.getMangerList();
  }
  createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.maxLength(500)
        ,Validators.required
        ,Validators.pattern(/^[a-zA-Z1-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/)]),
      address: new FormControl('',[Validators.required]),
      mobileNo: new FormControl('',[Validators.required]),
      birthDate: new FormControl(new Date(),[Validators.required]),
      mangerId: new FormControl(0,[Validators.required])
    });
  }
  getMangerList(){
    this.employeeSerivce.getManger().subscribe(
      (response) => {
        this.MangerList = response;
        console.log(this.MangerList);
      },
      () => {
        alert('Error loading MangerList');
      });
  }
saveEmployee(){
 
  if(this.employeeData.valid){
   this.employeeData.controls['mangerId'].setValue(parseInt(this.employeeData.controls['mangerId'].value));
    this.employeeSerivce.Insert(this.employeeData.value).subscribe(
      (response) => {
       alert("Data Save Successfully");
      },
      (e) => {
        console.log(e)
        alert('Error Saving Data');
      });
    }
  }
  
}
