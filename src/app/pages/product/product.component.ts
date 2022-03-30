import { Component, OnInit } from '@angular/core';
import { ProductFaker } from 'src/app/fakers/product.faker';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: Product[] = ProductFaker.fetchProducts();
  gridMode = true;
  filterMode: number = 0;

  constructor() { }

  ngOnInit(): void {}

  get productData() { 
    if (this.filterMode == 0) return this.products;
    else if (this.filterMode == 1) return this.products.slice().sort((p1, p2) => (p1.price - p1.discount) - (p2.price - p2.discount));
    else return this.products.slice().sort((p1, p2) => (p2.price - p2.discount) - (p1.price - p1.discount)); 
  }

}
