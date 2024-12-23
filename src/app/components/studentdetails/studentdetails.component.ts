import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit{

  student:any=  [];

  constructor(private studls:StudentService){

  }
  ngOnInit() {
    this.student=this.studls.getStudents();  
  }
  
}
