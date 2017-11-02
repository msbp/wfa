import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TransportProvider} from '../../providers/transport/transport'
  
@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  providers: [TransportProvider]
  })






export class HomePage {

  constructor(private transport: TransportProvider) {
  }


  ionViewDidLoad(){
        console.log("page loaded")              
  }

 
  sampleHttpRequest(){ 
        console.log("ok");  

        this.transport.get()  
  
  }
}
