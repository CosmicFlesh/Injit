import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './mascotas.entity';

@Injectable()
export class MascotasService {
  constructor(
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoRepo.find();
  }

  create(producto: Partial<Producto>) {
    const nuevo = this.productoRepo.create(producto);
    return this.productoRepo.save(nuevo);
  }

  findOne(id: number): Promise<Producto|null> {
    return this.productoRepo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Producto>) {
    await this.productoRepo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.productoRepo.delete(id);
  }
}
