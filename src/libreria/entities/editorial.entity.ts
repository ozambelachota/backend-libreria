import { OneToMany } from 'typeorm';
import { Libro } from './libro.entity';
import {Entity,Column,PrimaryGeneratedColumn, ManyToOne} from 'typeorm'

@Entity()
export class Editorial{
 @PrimaryGeneratedColumn()
 idEditorial?:number

 @Column()
 nombre!:string

 @Column()
 direccionFisica!:string

 @Column()
 url!:string

 @Column()
 ruc!:string

 @OneToMany(()=>Libro,libro => libro.editoriales )
 libro:Libro[]
}