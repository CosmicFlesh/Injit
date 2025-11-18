import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascotas } from './mascotas.entity';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Mascotas)
    private MascotasRepo: Repository<Mascotas>,
  ) {}

  findAll(): Promise<Mascotas[]> {
    return this.MascotasRepo.find();
  }

  create(Mascotas: Partial<Mascotas>) {
    const nuevo = this.MascotasRepo.create(Mascotas);
    return this.MascotasRepo.save(nuevo);
  }

  findOne(id: number): Promise<Mascotas|null> {
    return this.MascotasRepo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Mascotas>) {
    await this.MascotasRepo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.MascotasRepo.delete(id);
  }
}
