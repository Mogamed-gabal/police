import { OcunterService } from './../ocunter.service';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { NgwWowService } from 'ngx-wow';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allNews:any[]=[]
 
 
  constructor(private _Router:Router,private spinner: NgxSpinnerService,private wowService: NgwWowService,private news:NewsService,public OcunterService:OcunterService)
  {
    this.wowService.init();

  }
navigate()
{
  this._Router.navigate(["/about"])
}

  ngOnInit(): void {
    this.news.getNews().subscribe({
      next:(article)=>this.allNews=article.articles.slice(0,6)
    })
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);

    this.OcunterService.findNumOfVisitors()


  }
}
