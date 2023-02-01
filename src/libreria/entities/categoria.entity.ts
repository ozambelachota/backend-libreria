import {PrimaryGeneratedColumn,Entity,Column,ManyToMany} from 'typeorm'
import { Libro } from './libro.entity'
@Entity()
export class Categoria{
  @PrimaryGeneratedColumn()
  idCategoria?:number

  @Column()
  nombre:string

  @ManyToMany(()=>Libro,libro => libro.categorias)

  libros:Libro[]
} 
