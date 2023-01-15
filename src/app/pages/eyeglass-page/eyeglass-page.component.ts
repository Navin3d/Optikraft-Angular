import { Component, OnInit } from '@angular/core';

import EyeglassCardModel from 'src/app/models/EyeglassCardModel';

@Component({
  selector: 'app-eyeglass-page',
  templateUrl: './eyeglass-page.component.html',
})
export class EyeglassPageComponent implements OnInit {
  ngOnInit(): void {
    this.cardDatas = [
      {
        imageUrl: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/newmenubanner.jpg?v=1583826330",
        text: "Shop Men"
      },
      {
        imageUrl: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/shopWomenMobile.png?v=1583741796",
        text: "Shop Women"
      },
      {
        imageUrl: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/eyeglass_kids.jpg?v=1586839209",
        text: "Shop kids"
      }
    ];
  }
  cardDatas: EyeglassCardModel[] = [];
}
