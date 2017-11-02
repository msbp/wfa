import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TransportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransportProvider {

  constructor(private http: HTTP) {
    console.log('Hello TransportProvider Provider');
    }

  get() {

    console.log("Making get request!")
    this.http.get('http://ionic.io', {}, {}).then(data => {
        console.log("success: " + data.status)




        }).catch(error => {
                console.log("error: " + JSON.stringify(error.status));



        });


  }

}
