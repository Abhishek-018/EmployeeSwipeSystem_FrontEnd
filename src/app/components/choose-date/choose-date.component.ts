import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwipeService } from 'src/app/utility/swipe.service';

@Component({
  selector: 'app-choose-date',
  templateUrl: './choose-date.component.html',
  styleUrls: ['./choose-date.component.css']
})
export class ChooseDateComponent implements OnInit {
  currentDate = new Date();
  response: any;
  constructor(private _fb: FormBuilder, 
    private _swipeService: SwipeService, 
    private _router: Router) { }

     chooseDateForm: FormGroup = this._fb.group({

      selectedDate: ['', Validators.required],
  
    });

  ngOnInit(): void {
  }

  submitDate(){
    const date: string = this.chooseDateForm.value.selectedDate;
    sessionStorage.setItem('selectedDateForEmployeeTimesheet', date); 
    setTimeout(() => {
      this._router.navigate(['/employeeTimesheet']);
    }, 1000);
  

  }

}
