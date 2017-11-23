import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Response, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";


@Injectable()
export class TransportProvider {
  
BASE_URL = "https://wfa-server.herokuapp.com/"


  constructor(private http: Http) {

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
    let body = JSON.stringify({
        example: 100
      });

    let headers = new Headers({
      'Content-Type': "application/json"
    });
    let options = new RequestOptions({
      headers: headers
    });
    this.http.post(this.BASE_URL + endpoint, body, options).toPromise().then(response => 
     this.processResponse(response), this.handleError);  
  }

  processResponse(response) {
    console.log("this is the response:" + JSON.stringify(response));
  }

  handleError(error: Response | any) {
    console.log(error.status);
  }

}
