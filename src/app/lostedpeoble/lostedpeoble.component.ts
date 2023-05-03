import { Router } from '@angular/router';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-lostedpeoble',
  templateUrl: './lostedpeoble.component.html',
  styleUrls: ['./lostedpeoble.component.css']
})
export class LostedpeobleComponent implements OnInit {
constructor(private _Router:Router){}

navigateToPage()
{
  this ._Router.navigate(['/Lostedone'])
}
navigateToForm()
{
  this ._Router.navigate(['/adddetails'])
}

ngOnInit(): void {
  
}

}
