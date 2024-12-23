import { Component, EventEmitter, Input ,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('fromParent')public parent:any;
  constructor(){

  }
  ngOnInit(): void {
    
  }
  @Output() public Childevent =  new EventEmitter();

  Fromchild(){
    this.Childevent.emit('i am coming from child');
  }

}
