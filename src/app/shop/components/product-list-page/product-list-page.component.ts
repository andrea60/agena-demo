import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  products$:Observable<Product[]> = of([{
    id:'1',
    name:'Foo',
    description:'Buy this',
    price:9.99,
    tags:[]
  },{
    id:'1',
    name:'Foo',
    description:'Buy this',
    price:15.99,
    tags:[]
  }])

  constructor() { }

  ngOnInit(): void {
  }

}
