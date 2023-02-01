import { Autor } from './../entities/autor.entity';
import { Injectable } from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
@Injectable()
export class AutorService {
  constructor(@InjectRepository(Autor) private autorRepository: Repository<Autor>) { }

  findAll():Promise<Autor[]> {
    return this.autorRepository.find()
  }
  create(autor : Autor):Promise<Autor>{
    return this.autorRepository.save(autor);
  }
  update(id:number,autor:Autor){
    return this.autorRepository.update(id,autor)
  }
  delete(id:number){
    return this.autorRepository.delete(id)
  }
  findByField(fields:string,valor:string ):Promise<Autor[]> {
    return this.autorRepository.find({ where:{[fields]:valor} })
  }
  findByOne(fields:string,valor:string ): Promise<Autor>{
    return this.autorRepository.findOne({
      where:{[fields]:valor}
    })
  }

}