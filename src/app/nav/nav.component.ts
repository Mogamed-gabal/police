import { UsersService } from './../users.service';
import { Component,OnInit,OnChanges } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit , OnChanges  {
  constructor(private UsersService:UsersService){}
  decodedToken:any
  usreName:string=''
  userImg:string=''
  isLogin:boolean=false;
  LogOut:boolean=false;
  localContent:any;
  showData:Boolean=false
  imgPrefix='https://policia.onrender.com/'
  display()
  {
    this.localContent=localStorage.getItem('token')
    this.UsersService.userData.subscribe({
      next:()=>{
        if(this.localContent!=null)
    {
      this.showData=true
      this.LogOut=true
      this.isLogin=false
      this.decodedToken=(jwt_decode(JSON.stringify(localStorage.getItem('token')) ))
      this.usreName=this.decodedToken.full_name
      this.userImg=this.decodedToken.img
    }else
    {
      this.LogOut=false
      this.isLogin=true
    }
      }
    })
    
  }
dosplay()
{
      this.showData=false
      this.LogOut=false
      this.isLogin=true
      localStorage.removeItem('token')
      localStorage.removeItem('decodeToken')
}

  
  ngOnInit(): void {
    this.display()
    
}

ngOnChanges():void{

}
}
