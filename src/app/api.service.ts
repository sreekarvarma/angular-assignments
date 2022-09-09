import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.url);
  }

  getEmployee(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  addEmployee(value: any) {
    return this.http.post(this.url, value);
  }

  updateEmployee(value: any, id: number) {
    return this.http.put(this.url + '/' + id, value);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
