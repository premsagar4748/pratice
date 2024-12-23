import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  getStudents(){
    return[{"id":1, "name":"prem","course":"angular"},
      {"id":2,"name":"aishu","course":"js"},
      {"id":3,"name":"ishan","course":"html"},
      {"id":4,"name":"kittu","course":"css"}];
     
  }
  
  constructor( private http:HttpClient){}
  url = "http://localhost:5050/mobiles"

  fetchmobiles(){

    
    return this.http.get(this.url)

  }


  


  

}
