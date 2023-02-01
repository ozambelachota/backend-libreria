import { Libro } from './libro.entity';
import {Column,Entity,ManyToMany,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Autor {
  @PrimaryGeneratedColumn()
  idAutor?:number

  @Column()
  nombre:string

  @Column()
  apellido:string

  @Column()
  nroDocumento:string

  @Column()
  fechaNacimiento:Date

  @ManyToMany(()=>Libro, libro => libro.autores)
  libros:Libro[]
}