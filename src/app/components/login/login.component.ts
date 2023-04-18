import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/utility/employee.service';
import { IEmployee } from 'src/app/utility/iemployee';
import { LoginService } from 'src/app/utility/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response: any;

  constructor(private _loginService:LoginService,
    private _router:Router, 
    private _fb: FormBuilder) { }

    loginForm: FormGroup = this._fb.group({
    employeeEmail: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
    password: ['', [Validators.required]],
  });
  

  ngOnInit(): void {
    
 
  }
  
  loginMethod(){
   const employee:IEmployee = this.loginForm.value
   
    this._loginService.login(employee).subscribe(
      data=>{
        this.response=data;
        if (this.response.message ==="Login Successful") {
          sessionStorage.setItem('employeeId', this.response.responseBody.employeeId); 
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: this.response.message,
            showConfirmButton: false,
            timer: 2000
          })
          this.loginForm.reset();
          setTimeout(() => {
            this._router.navigate(["/home"])
            
          }, 2000);
          

          

          console.log( 'this is response:', this.response);
          console.log(sessionStorage)
        }
        
      },

      error=>{
        this.response = error.error
        Swal.fire('Error', this.response.message, 'error')
        this.loginForm.reset();
        console.log('this is error:', error)}
    );

    
  }

}
