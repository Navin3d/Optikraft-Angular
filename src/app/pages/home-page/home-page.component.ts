import { Component, OnInit } from '@angular/core';

import HomeCardModel from "../../models/HomeCardModel";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  
  cardDatas: HomeCardModel[] = [];

  ngOnInit(): void {
    this.cardDatas = [
      {
        image1: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/hapstre_480x.jpg?v=1583740632",
        text1: "Happster",
        image2: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/5_480x.jpg?v=1588331524",
        text2: "Delivery in 4-5 days",
        image3: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/metal_480x.jpg?v=1583740741",
        text3: "Metal"
      },
      {
        image1: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/reading_glasses_01_360x.jpg?v=158703487",
        text1: "Reading glass",
        image2: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/360X360_sunon_360x.jpg?v=1585051656",
        text2: "Sun On",
        image3: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/SP--01-10_073e42c5-01aa-48d4-b401-41438533e086_360x.jpg?v=1585559123",
        text3: "Lightweight"
      },
      {
        image1: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/rounds_360x.jpg?v=1583740921",
        text1: "Round",
        image2: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/rectangle_360x.jpg?v=1583740940",
        text2: "Rectangle",
        image3: "https://cdn.shopify.com/s/files/1/0015/2879/1092/files/360X360_cateye_360x.jpg?v=1585400171",
        text3: "Cateyes"
      }
    ];
  }
}
