import { Component } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [NgOptimizedImage, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product: Product;

  constructor() {
    this.product = {
      id: '1',
      name: 'Product 1',
      description: 'Product 1 description',
      price: 100,
      image: 'robot-arm-left.avif',
      category: 'Robot Parts',
      discount: 0.1,
    };
  }

  getImageUrl(image: string): string {
    return `/images/robot-parts/${image}`;
  }

  addToCart(product: Product, event: Event) {
    product.name += ' - added to cart';
    console.log(event);
  }
}
