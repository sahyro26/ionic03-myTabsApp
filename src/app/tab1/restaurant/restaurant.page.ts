import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  id:string | null = "";

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id'); 
  }

}
