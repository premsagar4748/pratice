import { Component, OnInit } from '@angular/core';
interface course{
  name:string,
  duraction:string,
  skills:string,
  fee:number,
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
// implement means to call about compont with oninit.
export class AboutComponent {


// varaibles  public ,private 
   
   public img:string="assets/images/img2.jpeg"
// property binding from TS to HTML
   public courses:string[]=["Angular","Js","css","Html"]

   public course:course={
    name:"angular",
    duraction:"45days",
    fee:15000,
    skills:"Html,css,js"
   }  
  // alert from html
  rec(x:any){
    alert(x)
    
  }
  rew(y:any){
    alert(y)
  }
  color:string="red"  
  prem={"color":"blue","text-align":"center","background-color":"yellow"}


  quantity:number=0
  quantity1:number=50
  red={"color":"red","font":"bold"}

  green={"color":"green","font":"bold"}

  counter=0
  inc (){
    this.counter=this.counter+1
  }
  dec(){
    this.counter=this.counter-1>0? this.counter-1:0

  } 

}
