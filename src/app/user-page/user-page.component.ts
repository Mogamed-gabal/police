import { Component,OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit  {
  token:any
  imgPrefix='https://policia.onrender.com/'
  constructor(){

  }

  ngOnInit(): void {
    this.token=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
    
    
  }
}
