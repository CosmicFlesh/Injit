
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre: string;

  @Column()
  Comuna: string;

  @Column()
  region: string;
  
  @Column()
  Telefono: string;
   
  @Column()
  correo: string;
}
