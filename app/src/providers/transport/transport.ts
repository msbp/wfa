import { Injectable } from '@angular/core';
import { HTTP} from '@ionic-native/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TransportProvider {
  
BASE_URL = "https://wfa-server.herokuapp.com/"


  constructor(private http: HTTP) {

    }

  get(endpoint: string) {
        return new Promise((resolve, reject) => {
            this.http.get(this.BASE_URL + endpoint, {}, {}).then(data => {
                         resolve(data.data)
                }).catch(error => {
                         reject(error)
                });
        });
  }

  post(endpoint: string) {


  }

}
