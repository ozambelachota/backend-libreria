import { Editorial } from './../entities/editorial.entity';
import { Autor } from './../entities/autor.entity';
import { Categoria } from './../entities/categoria.entity';
export class createDtoLibro{
  readonly titulo:string
  readonly fechaPublicacion:Date
  readonly categoria?:string
  readonly editorial?:string
  readonly autor?:string
  readonly url:string
  readonly cantidadPaginas:number
  readonly categorias:Categoria[]
  readonly autores:Autor[]
  readonly editoriales:Editorial

}