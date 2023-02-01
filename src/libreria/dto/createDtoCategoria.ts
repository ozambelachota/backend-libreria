import { Libro } from './../entities/libro.entity';
export class createDtoCategoria{
  readonly nombre:string
  readonly libros:Libro[]
}