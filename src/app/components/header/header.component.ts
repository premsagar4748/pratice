import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navs:any=[
    {
      name:"Home",
      url:"/"
    },
    {
      name:"about",
      url:"/about"
    },
    {
       name:"services",
      url:"/services"
    },
    {  
       name:"contact",
      url:"/contact"
    }, 
    {
      name:"blog",
     url:"/blog"
    },
    {
        name:"register",
      url:"/register"
    },
    {
      name:"crud",
      url:"/crud"
    },
    {
        name:"login",
      url:"/login" 
    },
    {
        name:"help",
      url:"/help"
      
    },
    {
      name:'pratice_file',
      url:'/practice'

    }
    
]

}
