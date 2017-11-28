import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TransportProvider } from '../../providers/transport/transport';
/**
 * Generated class for the ExtraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-extra',
  templateUrl: 'extra.html',
  providers: [TransportProvider]
})
export class ExtraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private transport: TransportProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExtraPage');
  }

  // extraPrediction() {
  //   let body = {};
  //
  //   this.transport.get('tree').then((data) => {
  //     console.log("Model: " + data);
  //   },
  //   (error) => {
  //     console.log("Error occurred: " + error);
  //   })
  //
  //   this.transport.post('examplePost', body).then((data) => {
  //     console.log("Post: " + data);
  //   },
  //   (error) => {
  //     console.log("Error occurred: " + error);
  //   })
  // }

}
