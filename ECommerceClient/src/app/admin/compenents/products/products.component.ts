import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    // this.showSpinner(SpinnerType.BallSpinClockwise);
    // this.httpClientService.get({ controller: "products" }).subscribe(data => console.log(data));

    // this.httpClientService.post({ controller: "products" },
    //   {
    //     name: "Ayna",
    //     description: "abc",
    //     price: 50,
    //     stock: 2
    //   }).subscribe();

    // this.httpClientService.put({ controller: "products" },
    //   {
    //     id: 2,
    //     name: "Kalem",
    //     description: "Uçlu Kalem",
    //     price: 20,
    //     stock: 5
    //   }).subscribe();

    // this.httpClientService.delete({ controller: "products" }, "5").subscribe();
  }
}
