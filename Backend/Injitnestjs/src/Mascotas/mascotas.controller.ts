import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { Mascotas } from './mascotas.entity';

@Controller('Mascotas')
export class MascotasController {
  constructor(private readonly MascotasService: MascotasService) {}

  @Get()
  findAll(): Promise<Mascotas[]> {
    return this.MascotasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.MascotasService.findOne(Number(id));
  }

  @Post()
  create(@Body() Mascotas: Partial<Mascotas>) {
    return this.MascotasService.create(Mascotas);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Mascotas>) {
    return this.MascotasService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.MascotasService.remove(Number(id));
  }
}


