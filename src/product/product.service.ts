import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  create(product: Product) {
    this.products.push({
      ...product,
      id: Date.now().toString(),
    });

    return product;
  }

  getAll(): Product[] {
    return this.products;
  }

  getOne(id: string): Product {
    return this.products.find((product) => product.id === id);
  }

  remove(id: string): Product {
    this.products = this.products.filter((product) => product.id !== id);

    return this.products.find((product) => product.id === id);
  }

  update(id: string, product: Product) {
    this.products = this.products.map((curP) => {
      if (curP.id === id) {
        return { ...curP, ...product };
      }
    });

    return this.products.find((product) => product.id === id);
  }
}
