import { Categoria } from './../entities/categoria.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService{
  constructor(@InjectRepository(Categoria) private categoriaRepository: Repository<Categoria> ) {}

  findAll():Promise<Categoria[]>{
    return this.categoriaRepository.find()
  }
  create(categoria:Categoria):Promise<Categoria>{
    return this.categoriaRepository.save(categoria)
  }
  update(id:number,categoria:Categoria){
    return this.categoriaRepository.update(id,categoria)
  }
  delete(id:number){
    return this.categoriaRepository.delete(id)
  }
  findByField(field:string,valor:string):Promise<Categoria[]>{
    return this.categoriaRepository.find({
      where:{
        [field]: valor
      }
    })
  }
  findByOne(field:string,valor:string):Promise<Categoria>{
    return this.categoriaRepository.findOne({
      where:{[field]:valor}
    })
  }
  findById(id:number):Promise<Categoria> {
    return this.categoriaRepository.findOne({
      where: {idCategoria:id}
    })
  }
}