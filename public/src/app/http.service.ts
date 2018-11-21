import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { 
  
  }
  getPets(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data=> console.log('Got our tasks!', data))
    return this._http.get('api/pets');
  }
  getPet(id){
    // let tempObservable = this._http.get('/tasks/5be61addf7319843838a0560')
    // tempObservable.subscribe(data=> console.log('Got one task!!!', data))
    return this._http.get('api/pets/' + id)
  }
  addPet(newpet) {
    return this._http.post('api/pets', newpet)
  }
  editPet(id, editpet) {
    return this._http.put('api/pets/' + id, editpet)
  }
  deletePet(id) {
    return this._http.delete('api/pets/' + id)
  }
  // addReview(id, newreview) {
  //   return this._http.post('api/reviews/new/' + id, newreview)
  // }
}


 