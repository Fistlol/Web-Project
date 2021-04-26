import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Product} from '../../../models/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  loading: boolean;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getProduct(id);
    });
  }

  getProduct(id: number): void {
    this.loading = true;
    this.productService.getProduct(id).subscribe((product) => {
      this.product = product;
      this.loading = false;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
