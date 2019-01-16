import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header :{
   
  } 
  
  constructor( private config :ConfigService ) { }

  ngOnInit() {

   this.header= this.getHeader()
  }

    getHeader(){

      /* دى بقى هترجعلنا هنا ال الحاجات اللى جوا ال  header اللى فى ال configration file اللى هو محطوط جوا ال config service
      جوا ال function اللى اسمها getCnfig() */
      return this.config.getConfig().header;
    
  }

}
