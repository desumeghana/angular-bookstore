import { Component,EventEmitter,Input,Output} from '@angular/core';
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
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product:Product|undefined;

  @Output() addproduct:EventEmitter<any>=new EventEmitter();
  addToCart(product:Product)
  {
    this.addproduct.emit(product);
  }
}
