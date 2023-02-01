import { Libro } from './../entities/libro.entity';
export class createDtoEditorial{
  readonly nombre:string
  readonly direccionFisica:string
  readonly url:string
  readonly ruc:string
  readonly libro:Libro[]
}