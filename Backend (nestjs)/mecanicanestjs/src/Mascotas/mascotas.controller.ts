import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { Producto } from './mascotas.entity';

@Controller('Mascotas')
export class MascotasController {
  constructor(private readonly MascotasService: MascotasService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.MascotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.MascotasService.findOne(Number(id));
  }

  @Post()
  create(@Body() producto: Partial<Producto>) {
    return this.MascotasService.create(producto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Producto>) {
    return this.MascotasService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MascotasService.remove(Number(id));
  }
}


