import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  test: boolean;
  title: string = 'Video Title';
  postedOn: string = 'Video Post Date'; // Probably a string
  description: string = 'Video Description';
  constructor() { }

  ngOnInit() {
  }

}
