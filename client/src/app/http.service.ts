import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/quotes')
  }

  create(newQ){
    return this._http.post('/quotes',newQ)
  }

  // getOne(id){
  //   return this._http.get(`/quotes/${id}`)
  // }

  update(q){
    console.log(q._id, q.rating);
    return this._http.patch(`/quotes/${q._id}`,q)
  }

  delete(id){
    return this._http.delete(`/quotes/${id}`)
  }
}
