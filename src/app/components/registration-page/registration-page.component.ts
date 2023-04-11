import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/utility/iemployee';
import { RegistrationService } from 'src/app/utility/registration.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  registrationResponse: any;
  errorRegistrationResponse: any;
  msg: any;
  roles: any;
  currentDate = new Date();

  constructor(private _fb: FormBuilder,
    private _router: Router,
    private _registrationService: RegistrationService,
  ) { }
  // Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]

  registerForm: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    employeeEmail: ['', [Validators.required]],
    employeeDob: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}'), Validators.maxLength(50)]],
    employeeDesignation: [{},]
  });

  ngOnInit(): void {

  }

  registration() {
    //   if(this.registerForm.controls['password'].value == this.registerForm.controls['confirmPassword'].value) {
    //     this._registrationService.registration(this.registerForm).subscribe(response => {
    //       if (this.registrationResponse.status == true) {            
    //         Swal.fire({
    //           position: 'center',
    //           icon: 'success',
    //           title: this.registrationResponse.message,
    //           showConfirmButton: false,
    //           timer: 2000
    //         })
    //         setTimeout(() => {
    //           this._router.navigate(['/login']);
    //         }, 2000);
    //        }
    //       else{
    //         Swal.fire('oops!', this.registrationResponse.message, 'error')
    //       }
    //     },);
    //   }
    //   else {
    //     Swal.fire('oops!', "Password and confirm-password doesn't match", 'error')
    //   }
    //   //this.registerForm.reset()

    // }
    // const employee: IEmployee = this.registerForm.value;
    if (this.registerForm.controls['password'].value == this.registerForm.controls['confirmPassword'].value) {

      this._registrationService.registration(this.registerForm.value).subscribe({
        next : (response: any) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Registration successfull.",
            showConfirmButton: false,
            timer: 2000
          })
          setTimeout(() => {
            this._router.navigate(['/login']);
          }, 2000);
        

          console.log(response);
        },
        error: (error: any) => {
          Swal.fire('oops!', error.error.message, 'error')
          console.log(error.error);

        }
      
      });

      
    }
    else {
      Swal.fire('oops!', "Password and confirm-password doesn't match", 'error')
    }


  }


};


