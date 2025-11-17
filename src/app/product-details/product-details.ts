import { Component, input, signal } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [NgOptimizedImage, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product = input.required<Product>();
  availableInvetory = signal(10);

  getImageUrl(image: string): string {
    return `/images/robot-parts/${image}`;
  }

  getPriceClass(discount: number): string {
    return discount > 0 ? 'line-through text-red-600' : 'text-green-600';
  }

  addToCart(event: Event) {
    setTimeout(() => {
      this.availableInvetory.update(value => value - 1);
    }, 100);
    console.log(event);
  }
}
