import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from './Usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuarios)
    private UsuariosRepo: Repository<Usuarios>,
  ) {}

  findAll(): Promise<Usuarios[]> {
    return this.UsuariosRepo.find();
  }

  create(Usuarios: Partial<Usuarios>) {
    const nuevo = this.UsuariosRepo.create(Usuarios);
    return this.UsuariosRepo.save(nuevo);
  }

  findOne(id: number): Promise<Usuarios|null> {
    return this.UsuariosRepo.findOneBy({ id });
  }

  async update(id: number, data: Partial<Usuarios>) {
    await this.UsuariosRepo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.UsuariosRepo.delete(id);
  }
}
