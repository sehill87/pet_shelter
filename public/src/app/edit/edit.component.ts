import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router, ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editPet: any;
  pets;
  pet;
  id: String;
  errors: Object;
  @Output() closeForm = new EventEmitter();

  @Input() childId: String;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.editPet = { _id: "", name: "", cuisine: "", description: "", skill1:"", skill2:"", skill3:""}
    this.getPetFromServiceById();

    this.errors = {}
    this.errors['errors'] = {}
    console.log(this.childId);
  }
  getPetFromServiceById() {
      let observable = this._httpService.getPet(this.childId)
      observable.subscribe(data =>  {
        console.log("Got our pet!", data)
        this.editPet = data;
        console.log(this.editPet)

      });
  }
  // onEditRestaurant(id, name, cuisine) {
  //   this.editRestaurant._id = id;
  //   this.editRestaurant.name = name;
  //   this.editRestaurant.cuisine = cuisine;
  // }
  onSubmitEditPet() {
    console.log("this will edit a pet")
    let observable = this._httpService.editPet(this.editPet._id, this.editPet);
    observable.subscribe (data => {
      console.log(data)
      if (data['errors']) {
        console.log(data['errors'])
        this.errors = data['errors']
      } else {
        this._router.navigate(['/pets'])
        this.closeForm.emit(null);
      }
    })
  }
  tellParentToCloseForm() {
    this.closeForm.emit(null);
  }
}
