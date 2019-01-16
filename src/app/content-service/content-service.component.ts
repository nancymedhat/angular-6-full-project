import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-service',
  templateUrl: './content-service.component.html',
  styleUrls: ['./content-service.component.css']
})
export class ContentServiceComponent implements OnInit {

  service ={
    breafly :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    breafFter :"— John Doe, Happy Customer",
    sectHead :"BELIEVING",
    sec2Head :"Focusing On What Matters Most",
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!" ,
    info2 :"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitaedicta sunt explicabo.",
    info3 :"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quiaconsequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet!",
    img :"../assets/images/dancer.jpg" ,
    





    
   

    
  }

  constructor() { }

  ngOnInit() {
  }

}
