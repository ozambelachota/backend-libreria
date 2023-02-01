import { Libro } from './../entities/libro.entity';
export class createDtoAutor{
  readonly nombre:string
  readonly apellido:string
  readonly nroDocumento:string
  readonly fechaNacimiento:Date
  readonly libros:Libro[]
}