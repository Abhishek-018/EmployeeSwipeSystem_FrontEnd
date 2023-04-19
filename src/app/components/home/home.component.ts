import { Component, OnInit } from '@angular/core';
import { IApiResponseEntity } from 'src/app/utility/i-api-response-entity';
import { ISwipeApiResponseEntity } from 'src/app/utility/iswipe-api-response-entity';
import { SwipeService } from 'src/app/utility/swipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _swipeService: SwipeService) { }

  ngOnInit(): void {
  }



  disableButton(button: HTMLButtonElement) {
    button.disabled = true;
    if (button.id === "swipe-in") {
      const swipeOutButton = document.getElementById("swipe-out")! as HTMLButtonElement;
      swipeOutButton.disabled = false;
    } else {
      const swipeInButton = document.getElementById("swipe-in")! as HTMLButtonElement;
      swipeInButton.disabled = false;
    }
  }

  onSwipeInClick() {
    const sessionEmployeeId = sessionStorage.getItem('employeeId')!;
    const empId = parseInt(sessionEmployeeId);
    this._swipeService.swipeIn(empId).subscribe({

      next: (data: IApiResponseEntity) => {
        console.log(data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000
        })
      },
      error: (error: any) => {
        console.log(error.error);
        Swal.fire('Unauthorized', error.error.message, 'error')
      }

    });

  }

  onSwipeOutClick() {
    const sessionEmployeeId = sessionStorage.getItem('employeeId')!;
    const empId = parseInt(sessionEmployeeId);
    this._swipeService.swipeOut(empId).subscribe({

      next: (data: IApiResponseEntity) => {
        console.log(data);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: data.message,
          showConfirmButton: false,
          timer: 2000
        })
      },
      error: (error: any) => {
        console.log(error.error);
        Swal.fire('Unauthorized', error.error.message, 'error')
      }

    });

  }
}
