import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './dto/product.service';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Product {
    return this.productService.getOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Product {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Product {
    return this.productService.remove(id);
  }
}
