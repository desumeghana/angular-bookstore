import { Component,Input,Output,EventEmitter } from '@angular/core';
interface Product{
  "ISBN": number,
    "title": string,
    "author": string,
    "summary": string,
    "image": string,
    "price":{ "currency":string,
    "value": number,
    "displayValue": string}
}
interface cart{
  quantity:number,
  product:Product
}
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Input()
  item:cart|undefined;

  @Output()
  removeFromCart:EventEmitter<number>=new EventEmitter();
  @Output()
  addQuantity:EventEmitter<number>=new EventEmitter();
  @Output()
  subtractQuantity:EventEmitter<number>=new EventEmitter();

  removeProduct(isbn:number)
  {
    this.removeFromCart.emit(isbn);
  }
  addProductQuantity(isbn:number)
  {
    this.addQuantity.emit(isbn);
  }
  subtractProductQuantity(isbn:number)
  {
    this.subtractQuantity.emit(isbn);
  }
}
