import { Editorial } from './../entities/editorial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from "@nestjs/common";
import { Repository } from 'typeorm';

@Injectable()
export class EditorialService{
  constructor(@InjectRepository(Editorial) private editorialRepository:Repository<Editorial> ){}
  findAll():Promise<Editorial[]>{
    return this.editorialRepository.find()
  }
  create(editorial:Editorial):Promise<Editorial>{
    return this.editorialRepository.save(editorial)
  }
  update(id:number,editorial:Editorial){
    return this.editorialRepository.update(id,editorial)
  }
  delete(id:number){
    return this.editorialRepository.delete(id)
  }
  findByField(field:string,valor:string):Promise<Editorial[]> {
    return this.editorialRepository.find({
      where:{[field]:valor}
    })
  }
  findByOne(field:string,valor:string):Promise<Editorial>{
    return this.editorialRepository.findOne(
      {
        where:{
          [field]:valor
        }
      }
    )
  }
  findById(id:number):Promise<Editorial> {
    return this.editorialRepository.findOne({
      where:{idEditorial:id}
    })
  }
}