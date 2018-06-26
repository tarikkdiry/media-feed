import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  test: boolean;
  // tslint:disable-next-line:no-inferrable-types
  title: string = 'Video Title';
  // tslint:disable-next-line:no-inferrable-types
  postedOn: string = '01/01/2018'; // Probably a string

  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  constructor() { }

  ngOnInit() {
  }

}
