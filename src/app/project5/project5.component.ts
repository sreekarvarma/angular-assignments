import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project5',
  templateUrl: './project5.component.html',
  styleUrls: ['./project5.component.scss']
})
export class Project5Component implements OnInit {



  userData = [
    {
      "name": "sreekar",
      "age": "28",
      "country": "India"
    },
    {
      "name": "prasanth",
      "age": "30",
      "country": "USA"
    },
    {
      "name": "sourya",
      "age": "29",
      "country": "USA"
    },
    {
      "name": "vikram",
      "age": "28",
      "country": "India"
    },
    {
      "name": "manoj",
      "age": "38",
      "country": "India"
    }
  ]

  filterData = ''

  constructor() { }

  ngOnInit(): void {
  }

}
