import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, NavParams } from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 GoogleMapOptions,
 CameraPosition,
 MarkerOptions,
 Marker
 } from '@ionic-native/google-maps';

import {TransportProvider} from '../../providers/transport/transport'

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  providers: [TransportProvider]
  })

export class HomePage {
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  latitude : any;
  longitude : any;



  constructor(public platform: Platform, private transport: TransportProvider, private googleMaps: GoogleMaps) {
  }


  ionViewDidLoad(){
        this.initializeMap();
  }

 initializeMap() {    
       this.platform.ready().then(() => {
        let minZoomLevel = 5;
        let mapOptions = {
           zoom: minZoomLevel,
           center: new google.maps.LatLng(38.50, -90.50),
           mapTypeId: google.maps.MapTypeId.TERRIAN
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
               var position = new google.maps.LatLng("48.4283", "123.3649");
               var dogwalkMarker = new google.maps.Marker({position: position, title: "Testing"});
               dogwalkMarker.setMap(this.map);
           });

   } 
 
  sampleHttpRequest(){ 

         this.transport.get('tree').then((data => {
               console.log("here is the model: " + data)
       }));

  //        this.transport.post('examplePost')
  
  }
}
