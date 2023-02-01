import { Editorial } from './editorial.entity';
import { Autor } from './autor.entity';
import { Entity,PrimaryGeneratedColumn,Column, ManyToMany, JoinTable, OneToMany, ManyToOne, JoinColumn } from "typeorm"
import { Categoria } from "./categoria.entity"


@Entity()
export class Libro{
  @PrimaryGeneratedColumn()
  idLibro?:number

  @Column()
  titulo:string

  @Column()
  fechaPublicacion:Date

  @Column()
  categoria?:string
  
  @Column()
  editorial?:string

  @Column()
  autor?:string
  
  @Column()
  url:string

  @Column()
  cantidadPaginas:number

  @ManyToMany(()=>Categoria,categoria => categoria.libros )
  @JoinTable({
    name:'libro_categoria',
    joinColumn:{
      name:'idLibro'
    },
    inverseJoinColumn:{
      name:'idCategoria'
    }, 
  })
  categorias: Categoria[]
  @ManyToMany(()=>Autor,autor => autor.libros )
  @JoinTable({
    name:'libro_autor',
    joinColumn:{
      name:'libroId'
    },
    inverseJoinColumn:{
      name:'autorId'
    }
  })
  autores: Autor[]
  @ManyToOne(()=>Editorial,editorial=> editorial.libro)
  @JoinColumn({
    name:'editorial_id'
  })
  editoriales: Editorial
}


