import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService) {
    super(spinner);
  }

  ngOnInit(): void {
  }

  create(name: HTMLInputElement, description: HTMLInputElement, price: HTMLInputElement, stock: HTMLInputElement) {
    this.showSpinner(SpinnerType.BallSpinClockwise);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.description = description.value;
    create_product.price = parseFloat(price.value);
    create_product.stock = parseInt(stock.value);

    this.productService.createProduct(create_product, () => {
      this.hideSpinner(SpinnerType.BallSpinClockwise);
      this.alertify.message("Product added successfully.", MessageType.Success, Position.TopRight, 2, true);
    })
  }
}
