import { Component, Input, OnInit } from '@angular/core';

import HomePageCardModel from "../../models/HomeCardModel";

@Component({
  selector: 'app-home-page-card',
  templateUrl: './home-page-card.component.html',
})
export class HomePageCardComponent implements OnInit {

  @Input() cardData: HomePageCardModel;

  ngOnInit(): void {}

  constructor() {
    this.cardData = {
      image1: "",
      text1: "",
      image2: "",
      text2: "",
      image3: "",
      text3: ""
    };
  }
}
