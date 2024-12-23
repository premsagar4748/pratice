import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './crud/crud.component';
import { PraticeComponent } from './pratice/pratice.component';
import { ChildComponent } from './pratice/child/child.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"services",
    component:ServicesComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent

  },
  {
    path:"dashboard",
    loadChildren:()=>import('./components/dashboard/dashboard.module').
    then(e=>e.DashboardModule)
  },
  {
    path:"crud",
    component:CrudComponent

  },
  {
    path:"practice",
    component:PraticeComponent
  },
  {
    path:"child",
    component:ChildComponent
  },
  
  {
    path:"**",
    component:PagenotfoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
