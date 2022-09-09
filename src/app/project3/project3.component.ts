import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.scss']
})
export class Project3Component implements OnInit {
  selectedGameName = "";
  selectedGameThumbRating = 0;

  sample_game_data = [
    {
      gameName: "Game 1",
      part: "part 1",
      releaseDate: "01/01/2020",
      cost: 200,
      thumbRating: 3,
    },
    {
      gameName: "Game 2",
      part: "part 2",
      releaseDate: "02/02/2020",
      cost: 300,
      thumbRating: 1,
    },
    {
      gameName: "Game 3",
      part: "part 3",
      releaseDate: "03/03/2020",
      cost: 400,
      thumbRating: 5,
    },
    {
      gameName: "Game 4",
      part: "part 4",
      releaseDate: "04/04/2020",
      cost: 500,
      thumbRating: 2,
    }
  ]

  displayedColumns: string[] = ['gameName', 'part', 'releaseDate', 'cost', 'thumbRating'];

  constructor() { }

  ngOnInit(): void {
  }

  onGameSelected(gameName: string, thumbRating: number) {
    this.selectedGameName = gameName;
    this.selectedGameThumbRating = thumbRating;
  }

  getDummyArray(no: number) {
    return Array(no).fill(1)
  }

}
