
import { Injectable } from '@angular/core';
import {configration} from './configration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
/* var to store the configration file */
  config = configration ;
  
  constructor() { }
  /* the function to return the configration file to be 
  used in component */
  getConfig (){
    return this.config ;
  }
}
