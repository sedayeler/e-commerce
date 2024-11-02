import { Component } from '@angular/core';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ECommerceClient';

  // constructor(private toastr: CustomToastrService) {
  //   toastr.message("Selam", "Ui", ToastrMessageType.Info, ToastrPosition.TopRight);
  // }
}





