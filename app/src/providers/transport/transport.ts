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

           let headers = new Headers({
          'Content-Type': "application/json"
            });
            let options = new RequestOptions({
            headers: headers
            });

            return new Promise((resolve, reject) => {
            this.http.get(this.BASE_URL + endpoint, options).toPromise().then(data => {
                         resolve(data["_body"])
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

    return new Promise((resolve, reject) => {
    this.http.post(this.BASE_URL + endpoint, body, options).toPromise().then(response => {
      resolve(JSON.stringify(response))
    }).catch(error => {
        reject(error)
      })
    }) 
  }
}
