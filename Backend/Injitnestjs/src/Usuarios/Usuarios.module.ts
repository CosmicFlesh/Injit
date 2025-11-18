import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './Usuarios.service';
import { UsuariosController } from './Usuarios.controller';
import { Usuarios } from './Usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuarios])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}