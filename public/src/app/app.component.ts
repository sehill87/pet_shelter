import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  newPet: any;
  editPet: any;
  pets;
  pet;
  id: String;

  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.newPet = { name: "", type: "", description: ""}
    this.editPet = { _id: "", name: "", type: "", description: ""}
    this.getPetsFromService();
    // this.getTaskFromService();
  }
  getPetsFromService() {
    let observable = this._httpService.getPets()
    observable.subscribe(data =>  {
      console.log("Got our pets!", data)
      this.pets = data;
      console.log(this.pets)

    });
  }
  getPetFromService(id) {
    let observable = this._httpService.getPet(id)
    observable.subscribe(data => {
      console.log("Got the pet!", data)
      this.pet = data;
    });
  }
  
  
  
  
}
