import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testomonial',
  templateUrl: './testomonial.component.html',
  styleUrls: ['./testomonial.component.css']
})
export class TestomonialComponent implements OnInit {

  testomonials :{

  }
  constructor( private config :ConfigService) { }

  ngOnInit() {
 this.testomonials = this.getTestomonial();
  }
 getTestomonial(){
   return this.config.getConfig().testomonials;
 }
}


 /* دى هى هى لو علمتها ال function و حطيتها فى الريتيرن */
/*this.testomonials = this.config.getConfig().testomonials; */