
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mascotas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column('decimal')
  precio: number;
  
  @Column()
  rutaimagen: string;
}
