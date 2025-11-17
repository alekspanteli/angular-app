import { Component } from '@angular/core';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {

}
