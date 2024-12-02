import { Component, OnInit } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ECommerceClient';

  // constructor(private toastr: CustomToastrService) {
  //   toastr.message("Selam", "Ui", ToastrMessageType.Info, ToastrPosition.TopRight);
  // }

  ngOnInit(): void {
    $.get("https://localhost:7031/api/Products")
  }
}







