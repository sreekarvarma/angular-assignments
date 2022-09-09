import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url = 'assets/employee-data.json';

  constructor(private http: HttpClient) { }

  getEmployeeData():Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }

  addEmployee(value: any) {
    return this.http.post(this.url, value)
  }

  updateEmployee(value: any) {
    return this.http.put(this.url, value)
  }

  deleteEmployee(value: any) {
    return this.http.delete(this.url +value)
  }

}

