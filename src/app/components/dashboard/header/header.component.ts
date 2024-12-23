import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  public email:any;

  constructor(public r:Router){

  }
  ngOnInit(): void {

  if(!localStorage.getItem("email")){
    this.r.navigate(['/blog'])
  }
  this.email=localStorage.getItem("email")
}
  
  logout(){
    this.r.navigate(['/blog'])
    localStorage.clear()

  }

}
