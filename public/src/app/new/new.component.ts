import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  id: String;
  errors: object;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.newPet = { name: "", type: "", description: "", skill1:"", skill2:"", skill3:""}
    // this.errors = {
    //   errors: {
    //     name: {}
    //   }
    // }
    this.errors = {}
    this.errors['errors'] = {}
    // this.errors['errors']['name'] = {}
  }
  onSubmitAddPet() {
    let observable = this._httpService.addPet(this.newPet);
    observable.subscribe (data => {
      console.log('New pet added', data);
      if (data['errors']) {
        console.log(data['errors'])
        if (data['errors']['code'] == 11000) {
          this.errors = {
            errors: {
              name: {
                message: "Pet already exists"
              }
            }
          }
        } else {
          this.errors = data['errors']
        }
      } else {
        this._router.navigate(['/pets'])
      }
    })
    // this.newPet = { name: "", type: "", description: ""}
  }
}
