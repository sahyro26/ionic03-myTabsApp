import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }
  restaurants = [
    {
      "id":1,
      "name": "Marrybrown",
      "address": "A-1 Jalan Serai Wangi K 16, Alam Avenue 2, Seksyen 16, 40200 Shah Alam, Selangor",
      "rating": 3.2,
      "image" : "https://marrybrown.com/wp-content/uploads/2019/11/marrybrown-favicon-neww.jpg",
    },
    {
      "id":2,
      "name": "ZUS Coffee",
      "address": "2, C-17-G, Jalan Serai Wangi L 16/L, Seksyen 16, Alam Avenue, 40200 Shah Alam, Selangor",
      "rating": 4.5,
      "image" : "https://worldfranchisecentre.com/wp-content/uploads/2024/01/Full-Colour-2.png",
    },
    {
      "id":3,
      "name": "Nasi Lan Kedah",
      "address": "2730, Jln Serai Wangi G 16/G, Seksyen 16, 40200 Shah Alam, Selangor",
      "rating": 4,
      "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPydqezX1Q4iAowVOVtuKefXcSaFOZisn4mA&s",
    },

  ]

}
