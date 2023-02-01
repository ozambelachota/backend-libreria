import { Categoria } from './../entities/categoria.entity';
import { Editorial } from './../entities/editorial.entity';
import { Libro } from './../entities/libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class LibroService{
  constructor(@InjectRepository(Libro) private libroRepository:Repository<Libro>,@InjectRepository(Editorial) editorialRepo: Repository<Editorial> ) {}

  findAll():Promise<Libro[]>{
    return this.libroRepository.find()
  }
  create(libro:Libro) : Promise<Libro>{
 
    return this.libroRepository.save(libro)
  }
  update(id:number,libro:Libro){
    return this.libroRepository.update(id,libro)
  }
  delete(id:number){
    return this.libroRepository.delete(id)
  }
  findByField(field:string,valor:string):Promise<Libro[]>{
    return this.libroRepository.find({
      where:{[field]:valor}
    })
  }
  findByOne(field:string,valor:string):Promise<Libro>{
    return this.libroRepository.findOne({
      where:{
        [field]:valor
      }
    })
  }
}