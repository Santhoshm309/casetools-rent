import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class MainService {
  BASE_URL = 'http://localhost:5000/';
  constructor( private http: Http){

  }
  login(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'login', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
  signup(postData): Observable<any> {
    return this.http.post( this.BASE_URL+ 'signup', postData).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  getStoreList(): Observable<any> {
    return this.http.get( this.BASE_URL+ 'store').map(data => data.json()).catch(err => Observable.throw(err.json()));

  }

  getStoreDetails(storeid): Observable<any> {
    return this.http.get( this.BASE_URL+ 'store/'+ storeid + '/item').map(data => data.json()).catch(err => Observable.throw(err.json()));

  }

  getItemCosts(item_id): Observable<any> {
    return this.http.get( this.BASE_URL+ 'itemcosts/'+ item_id).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  buyItems(post_data): Observable<any> {
    return this.http.post( this.BASE_URL+ 'buyitem', post_data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  viewCart(user_id): Observable<any> {
    return this.http.get( this.BASE_URL+ 'items/'+ user_id).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  addStore(post_data): Observable<any> {
    return this.http.post( this.BASE_URL+ 'store', post_data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }

  addItemToStore(post_data,store_id): Observable<any> {
    return this.http.post( this.BASE_URL+ 'store/' +store_id +'/item', post_data).map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
  viewItemsoFStore(store_id): Observable<any> {
    return this.http.get( this.BASE_URL+ 'store/' +store_id +'/item').map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
  getItemList(): Observable<any> {
    return this.http.get( this.BASE_URL+ 'items').map(data => data.json()).catch(err => Observable.throw(err.json()));
  }
}
