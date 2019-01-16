import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  activetab =""
  constructor() { }

  ngOnInit() {
  }
  getClick( tabName :string){
    this. activetab =tabName ;
  }
}
