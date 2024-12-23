import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pratice',
  templateUrl: './pratice.component.html',
  styleUrls: ['./pratice.component.css']
})
export class PraticeComponent implements OnInit {

  public prem:string = 'i am coming form parent';
  public msg:any;
  constructor(){}
  ngOnInit(): void {
    
  }
}
