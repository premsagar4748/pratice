import { Component} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent{

  type1="password"

  show(){
    this.type1="text"
  }
  hide(){
    this.type1="password"
  }

 
}