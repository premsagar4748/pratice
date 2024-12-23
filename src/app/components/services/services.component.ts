import { Component } from '@angular/core';
interface courses{
  name:string,
  img:string,
  content:string,
  Fee:number,
  duraction:string,
  type:string
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  courses:courses[]=[
    {
    name:"HTML",
    img:"h.png",
    content:"This course is userd angular front end frame work for  single page web application And its maintained and developed by google developers,it very easy design single web page application,and easy to link the web pages one to another etc..",
    Fee:15000,
    duraction:"15days",
    type:"design"
    },
    {
      name:"css",
      img:"c.jpg",
      content:"This course is userd angular front end frame work for  single page web application And its maintained and developed by google developers,it very easy design single web page application,and easy to link the web pages one to another etc..",
      Fee:10000,
      duraction:"15days",
      type:"design"
    },
    {
      name:"node",
      img:"n.jpg",
      content:"This course is userd angular front end frame work for  single page web application And its maintained and developed by google developers,it very easy design single web page application,and easy to link the web pages one to another etc..",
      Fee:1000,
      duraction:"2days",
      type:"design"
    },
    {
      name:"Angular",
      img:"a.jpg",
      content:"This course is userd angular front end frame work for  single page web application And its maintained and developed by google developers,it very easy design single web page application,and easy to link the web pages one to another etc..",
      Fee:20000,
      duraction:"45days",
      type:"design"
    },
    {
      name:"java",
      img:"j.jpeg",
      content:"This course is userd angular front end frame work for  single page web application And its maintained and developed by google developers,it very easy design single web page application,and easy to link the web pages one to another etc..",
      Fee:15000,
      duraction:"15days",
      type:"development"
    },
    {
      name:"routing",
      img:"r.jpg",
      content:"This course is userd angular front end frame work for  single page web application And its maintained and developed by google developers,it very easy design single web page application,and easy to link the web pages one to another etc..",
      Fee:15000,
      duraction:"15days",
      type:"development"
     },        
    
  ]

 
}
