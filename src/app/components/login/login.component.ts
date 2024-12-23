import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  isSubmit:any=false;
  loginForm!: FormGroup;
   
//   loginForm:any= new FormGroup ({
//     email:new FormControl ('',Validators.required),
//     password:new FormControl('',Validators.required)
// })
constructor(public api:HttpClient,public r:Router, private fb : FormBuilder){

}

ngOnInit(){
  this.loginForm = this.fb.group({
    email : ['', Validators.required],
    password : ['']
  })
}
  // errors cheacking
  get e(){
    return this.loginForm.controls
  }

  login(){
    this.isSubmit=true;
    console.log(this.loginForm.value);

    const data=new FormData()
    data.append("userEmail",this.loginForm.value.email)
    data.append("userpassword",this.loginForm.value.password)


    this.api.post('https://jsonplaceholder.typicode.com/todos/1',data).
    subscribe((res:any)=>{
      console.log(res)
      
 
        localStorage.setItem("email",this.loginForm.value.email)
        this.r.navigate(['/dashboard'])      
    })
  }

}