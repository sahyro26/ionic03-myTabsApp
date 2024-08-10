import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  orders = [
    {
      "restaurant": "Marrybrown",
      "dt": "10 Aug 2024 - 8.00am",
      "price": "Rm54.00"
    },
    {
      "restaurant": "Marrybrown",
      "dt": "8 Aug 2024 - 5.00pm",
      "price": "Rm54.00"
    }
   
  ]

}
