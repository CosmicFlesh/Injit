import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuariosService } from './Usuarios.service';
import { Usuarios } from './Usuarios.entity';

@Controller('Usuarios')
export class UsuariosController {
  constructor(private readonly UsuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuarios[]> {
    return this.UsuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.UsuariosService.findOne(Number(id));
  }

  @Post()
  create(@Body() Usuarios: Partial<Usuarios>) {
    return this.UsuariosService.create(Usuarios);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Usuarios>) {
    return this.UsuariosService.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UsuariosService.remove(Number(id));
  }
}


