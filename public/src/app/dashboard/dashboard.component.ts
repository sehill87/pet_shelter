import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pets;
  pet;
  parentId: string;
  // reviews: Array<object>;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    console.log(this.parentId);
    this.getPetsFromService()
  }
  getPetsFromService() {
    let observable = this._httpService.getPets()
    observable.subscribe(data =>  {
      console.log("Got our pets!", data)
      this.pets = data;
      console.log(this.pets)

    });
  }
  // getPetsFromService() {
  //   let observable = this._httpService.getPets()
  //   observable.subscribe(data => {
  //     console.log("Got our pets!", data)

  //     for (var idx in data) {
  //       let currPet = data[idx];
  //       var sum = 0;
  //       for (var rev of currPet['reviews']) {
  //         sum += rev['stars'];
  //       }
  //       console.log(sum)
  //       if (sum === 0) {
  //         var avg = sum
  //         data[idx]['average'] = avg;
  //       } else {
  //         avg = sum / currPet['reviews'].length
  //         data[idx]['average'] = avg;
  //       }
        
  //     }

  //     this.pets = data;
  //     console.log(this.pets)
  //   });
  // }
  deletePetFromService(id) {
    console.log('Click will delete', id)
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      this.getPetsFromService();
    })
  }
  showEdit(idFromButton) {
    this.parentId = idFromButton;
    console.log(this.parentId);
  }
  dataFromChild(eventData) {
    this.parentId = eventData;
    this.getPetsFromService();
  }
  
}
