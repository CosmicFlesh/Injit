
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuarios {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Nombre: string;

  @Column()
  correo: string;

  @Column()
  Contraseña: string;

  @Column()
  Comuna: string;

  @Column()
  region: string;
  
  @Column()
  Telefono: string;
   
  
}
