import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './producto.service';
import { Producto } from './producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productosService.findOne(Number(id));
  }

  @Post()
  create(@Body() producto: Partial<Producto>) {
    return this.productosService.create(producto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Producto>) {
    return this.productosService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productosService.remove(Number(id));
  }
}


