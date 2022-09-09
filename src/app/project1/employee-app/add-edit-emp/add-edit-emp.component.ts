import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {

  id!: string | null

  employeeForm = new FormGroup({
    // employeeNumber: new FormControl('', [Validators.required]),
    employeeName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    projectAllocation: new FormControl('yes', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    reportingManager: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required]),
  })

  constructor(private route: ActivatedRoute,
     private apiService: ApiService,
      private router: Router,
      private dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    if(this.id!=='0' && this.id!==null) {
      this.apiService.getEmployee(parseInt(this.id)).subscribe((data: any) => {
        this.employeeForm.patchValue(data)
      } )
    }
  }

  goBack() {
      const dialogRef = this.dialog.open(DialogComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if(result===true){
          this.router.navigate(['/proj1/employee'])
        }
      });
  }

  onSave() {
    if(this.id==='0' || this.id===null) {
      this.apiService.addEmployee(this.employeeForm.value).subscribe((data: any) => {
        if(data.status === 'success') {
        this.router.navigate(['/proj1/employee'])
        }
      } )
    } else {
      this.apiService.updateEmployee( this.employeeForm.value, parseInt(this.id)).subscribe((data: any) => {
        if(data.status === 'success') {
        this.router.navigate(['/proj1/employee'])
        }
      } )
    }
    this.router.navigate(['/proj1/employee'])
  }

}
