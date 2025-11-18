import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Producto } from './mascotas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}