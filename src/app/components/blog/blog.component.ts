import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{

  isSubmit:any=false;

  student={fname:"",lname:"",number:"",email:""}

  constructor(public r:Router){  

    
  }
  ngOnInit(): void {
    
  }
  login(){
    this.isSubmit=true;    
    console.log(this.student.email)

  localStorage.setItem("email",this.student.email)
  this.r.navigate(['/dashboard'])    
  

}
}