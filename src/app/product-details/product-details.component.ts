import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  cart: IProduct[] = [];


  getDiscountClasses(product: IProduct) {
    if (product.discount > 0) {
      return ['strikethrough'];
    } else return [];
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return `/assets/images/robot-parts/${product.imageName}`;
  }

  addToCart(product: IProduct) {
    this.cart.push(product);
    console.log(this.cart);
  }
}
