import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit{

  student:any;

  constructor(private stdli:StudentService){

  }

  ngOnInit(){
   this.student=this.stdli.getStudents();
  }

  mytext!:string;
  

}
