import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onEmployeeClick() {
    this.router.navigate(['/proj1/employee'])
  }

  onCustomerClick() {
    this.router.navigate(['/proj1/customer'])
  }

  parentChildClick() {

  }

  onGamesClick() {

  }

  characterLimitClick() {

  }

  onFilterClick() {
    this.router.navigate(['/proj5'])
  }
}
