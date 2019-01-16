import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
  prices ={
   
  } 

  constructor( private config :ConfigService) { }

  ngOnInit() {
    this.prices= this.getPrice()
  }
  
  getPrice(){
    return this.config.getConfig().prices;
  }
}
