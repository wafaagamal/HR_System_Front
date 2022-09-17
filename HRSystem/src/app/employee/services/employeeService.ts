import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IEmployee } from "../module/IEmployee";
import { catchError } from 'rxjs/operators';
import { IAttendences } from "../module/IAttendences";

const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
    })
};
@Injectable({
    providedIn: 'root'
})

export class EmployeeService {
    constructor(private httpClient: HttpClient) {

    }
    getManger(): Observable<IEmployee> {
        return this.httpClient.get<IEmployee>(environment.URL + "/manger")
            .pipe(catchError(this.errorHandeler))
    }
    public errorHandeler(error: HttpErrorResponse) {
        return throwError(error);
    }
    Insert(employeeData: any) {
        console.log(employeeData)
        return this.httpClient.post<any>(environment.URL, employeeData)
            .pipe(catchError(this.errorHandeler))
    }
    getEmployeeDetails(page: number, pageSize: number) {

        

        return this.httpClient.get<IEmployee[]>(environment.URL + '/' + page + '/' + pageSize)
            .pipe(catchError(this.errorHandeler))
    }

    GetEmployeeAttendences(empId: number) {
        return this.httpClient.get<IAttendences[]>(environment.URL + '/' + empId)
            .pipe(catchError(this.errorHandeler))
    }
    SignIn(Id: number) {
        // let queryParams = new HttpParams();
        // queryParams = queryParams.append("Id", Id);
        return this.httpClient.get<any>(environment.URL + '/in/' + Id)
            .pipe(catchError(this.errorHandeler))
    }

    SignOut(Id: number) {
        return this.httpClient.get<any>(environment.URL + '/out/' + Id)
            .pipe(catchError(this.errorHandeler))
    }
}