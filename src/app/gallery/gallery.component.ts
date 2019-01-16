import { ConfigService } from './../config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery= {

  }

  constructor( private config:ConfigService) { }

  ngOnInit() {
    this.gallery =this. getGallery();
  }

  getGallery(){
    return this.config.getConfig().gallery;
  }

}
