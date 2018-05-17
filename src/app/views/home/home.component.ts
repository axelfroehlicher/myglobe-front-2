import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess1() {
    this.toastr.info('Hello world!', 'Toastr fun!', {
      closeButton: true,
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      progressAnimation: 'increasing'
    });
  }
  showSuccess2() {
    this.toastr.success('Hello world!', 'Toastr fun!', {
      closeButton: true,
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
    });
  }

}
