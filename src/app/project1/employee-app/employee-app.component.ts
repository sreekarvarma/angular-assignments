import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-employee-app',
  templateUrl: './employee-app.component.html',
  styleUrls: ['./employee-app.component.scss']
})
export class EmployeeAppComponent implements OnInit {

  empDataSource!: MatTableDataSource<any>
  displayedColumns = ['employeeNumber', 'employeeName', 'projectAllocation', 'email', 'reportingManager', 'role', 'actions' ]

  
  employee: any;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.refreshEmpData()
  }

  refreshEmpData() {
    this.apiService.getEmployees().subscribe((data: any) => {
      this.empDataSource = new MatTableDataSource(data)
      this.empDataSource.filterPredicate = (data: any, filter: string) => {
        return data.employeeNumber.toString().toLowerCase().includes(filter)
      }
    })
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.empDataSource.filter = filterValue.trim().toLowerCase();
  }

  onAddClick() {
    this.router.navigate(['/proj1/employee/update/0'])
  }

  onDeleteEmployee(id: number) {
    this.apiService.deleteEmployee(id).subscribe((data: any) => {
      this.refreshEmpData()
    } )
  }

}
