import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';
import PRODUCTS from '../products.json';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  products: Product[] = PRODUCTS;
}
