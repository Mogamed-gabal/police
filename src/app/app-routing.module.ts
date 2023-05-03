import { CamComponent } from './cam/cam.component';
import { SuccessprocessComponent } from './successprocess/successprocess.component';
import { AdddetailsComponent } from './adddetails/adddetails.component';
import { LostedoneComponent } from './lostedone/lostedone.component';
import { LostedpeobleComponent } from './lostedpeoble/lostedpeoble.component';

import { LostsComponent } from './losts/losts.component';
import { RegisterComponent } from './register/register.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AboutComponent } from './about/about.component';
import { NotfondpageComponent } from './notfondpage/notfondpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { CriminalservicesComponent } from './criminalservices/criminalservices.component';
import { RealestateservicesComponent } from './realestateservices/realestateservices.component';
import { LowComponent } from './low/low.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PageaboutcontainerComponent } from './pageaboutcontainer/pageaboutcontainer.component';
import { PagecreatorComponent } from './pagecreator/pagecreator.component';
import { PageaimsComponent } from './pageaims/pageaims.component';
import { PageserveciseComponent } from './pageservecise/pageservecise.component';
import { LostedOneDetailsComponent } from './losted-one-details/losted-one-details.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserLostedComponent } from './user-losted/user-losted.component';
import { LostedObjectsComponent } from './losted-objects/losted-objects.component';
import { LostedObectedFormComponent } from './losted-obected-form/losted-obected-form.component';
import { LostedObectedPageComponent } from './losted-obected-page/losted-obected-page.component';


const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'Home'},
{path:'Complaints',component:ComplaintsComponent,title:'complints'},
{path:'register',component:RegisterComponent,title:'register'},
{path:'login',component:LoginComponent},
{path:'low',component:LowComponent},
{path:'services',component:ServicesComponent,title:'services',children:[
  {path:'Documentation',component:RealestateservicesComponent,title:'Documentation'},
  {path:'criminalservices',component:CriminalservicesComponent,title:'criminalservices'},
  {path:'losts',component:LostsComponent,title:'losts'},
]},
{path:'contact',component:ContactusComponent},
{path:'about',component:AboutComponent},
{path:'pageaboutcontainer',component:PageaboutcontainerComponent,children:[
  {path:'pageaims',component:PageaimsComponent},
  {path:'pagecreator',component:PagecreatorComponent},
  {path:'pageservices',component:PageserveciseComponent},
]},
{path:'lostedObjects',component:LostedObjectsComponent,title:"lostedObjects"},
{path:'lostedObectedForm',component:LostedObectedFormComponent},
{path:'lostedObjectedPage',component:LostedObectedPageComponent,title:'lostedObectedPage'},
{path:'Lostedone',component:LostedoneComponent},
{path:'lostedpeoble',component:LostedpeobleComponent},
{path:'lostedOneDetails/:_id',component:LostedOneDetailsComponent},
{path:'adddetails',component:AdddetailsComponent},
{path:'userPage',component:UserPageComponent,children:[
  {path:'userLosted',component:UserLostedComponent}
]},
{path:'success',component:SuccessprocessComponent},
{path:'cam',component:CamComponent},
{path:'**',component:NotfondpageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
