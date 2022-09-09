import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project2',
  templateUrl: './project2.component.html',
  styleUrls: ['./project2.component.scss']
})
export class Project2Component implements OnInit {

  childData = "Data not received!"

  constructor() { }

  ngOnInit(): void {
  }

  onSendData() {
    this.childData = "Mulyono Putra"
  }

}
