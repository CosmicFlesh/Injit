import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Mascotas } from './mascotas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mascotas])],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}