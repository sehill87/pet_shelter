import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  pet: object;
  count: number = 0;
  // reviews: Array<object>;

  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.pet = {};
    this.getPetFromServiceById();
  }

  getPetFromServiceById() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
  
      let observable = this._httpService.getPet(params['id'])
      observable.subscribe(data =>  {
        console.log("Got our restaurant!", data)
        this.pet = data;
      
        // this.pets = data['reviews'];
        // this.reviews.sort(this.compare);
        // console.log(this.reviews)
        // var sum = 0;
        // for (var rev of this.reviews) {
        //   sum += rev['stars'];
        // }
        // console.log(sum);
        // var avg = sum / this.reviews.length
        // console.log(avg)
      });
    });
  }

  likeThisPet(count) {
    this.count ++
    var number = this.count
    return number
  }


  
  deletePetFromService(id) {
    console.log('Click will delete', id)
    let observable = this._httpService.deletePet(id);
    observable.subscribe(data => {
      this._router.navigate(['/pets'])
    })
  }
  
}
