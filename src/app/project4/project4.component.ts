import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project4',
  templateUrl: './project4.component.html',
  styleUrls: ['./project4.component.scss']
})
export class Project4Component implements OnInit {
  maxCharacterLimit = 50;
  characterCount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.characterCount = event.target.value.length;
  }

}
