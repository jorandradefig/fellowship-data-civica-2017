import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  breeds:object={};
  breedsImage:object={};

  constructor(private http:Http) { }
  
  url(breed){
    console.log(breed);
    this.http.get('https://dog.ceo/api/breed/'+breed+'/images/random').subscribe((res:Response)=>this.breedsImage=res.json())
  }
  getBreeds(){
    this.http.get(
    'https://dog.ceo/api/breeds/list').subscribe((res:Response)=>this.breeds=res.json());
  }
 
  ngOnInit(){
    this.getBreeds();
  }
  
 
}
