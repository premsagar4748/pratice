import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  student={fname:"",lname:"",email:"",password:"",phone:""}

  public msg:any;
  public clr={red:false,green:false}


// hpptclient name add in constructor
  constructor(public api:HttpClient){
  }

  ngOnInit(): void {    
  }
  
  reg(){
    console.log(this.student)
    const data=new FormData()
    data.append("fname",this.student.fname)
    data.append("lname",this.student.lname)
    data.append("email",this.student.email)
    data.append("password",this.student.password)
    data.append("phone",this.student.phone)

    this.api.post("https://jsonplaceholder.typicode.com/todos/1",data).
    subscribe((res:any)=>{
      
      console.log(res)
      this.msg=res.message;

      if(res.status===1){
        this.clr={red:false,green:true}
        }
        else{
          this.clr={red:true,green:false}
        }

    })
    
  }

}
