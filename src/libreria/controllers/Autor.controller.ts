import { response } from 'express';
import { createDtoAutor } from './../dto/createDtoAutor';
import { LibroService } from './../services/libro.service';
import { AutorService } from './../services/autor.service';
import { Autor } from './../entities/autor.entity';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";


@Controller('api/autor')
export class AutorControllers{
  constructor(private readonly autorService: AutorService){
  }
  @Post('/create')
  async create(@Res() response,@Body() autor:createDtoAutor){
    const newAutor = await this.autorService.create(autor)

    return response.status(HttpStatus.CREATED).json({newAutor})
  }
  @Get('/list')
  async listarAutor(@Res() response){
    const listaAutores = await this.autorService.findAll()
    return response.status(HttpStatus.OK).json(listaAutores);
  }
  @Delete('/elimina/:id')
  async eliminarAutor(@Res() response,@Param('id') id){
    const eliminado = await this.autorService.delete(id)
    return response.status(HttpStatus.ACCEPTED).json({eliminado})
  }
  @Put('/actualizar/:id')
  async actualizarAutorU(@Res() response,@Body() autor:Autor,@Param('id') id){
    const actualizarAutor = await this.autorService.update(id,autor)
    return response.status(HttpStatus.OK).json(actualizarAutor);
  }
  @Get('list/:field/:valor')
  async busquedaListAutor(@Res()response, @Param('field') field:string, @Param('valor') valor:string ){
    const buscarList= await this.autorService.findByField(field,valor)
    return response.status(HttpStatus.OK).json(buscarList)
  }
  @Get('buscar/:field/:valor')
  async buscarAutor(@Res() response, @Param('field') field:string ,@Param('valor')  valor:string){
    const autorBuscar= await this.autorService.findByOne(field,valor);
    return response.status(HttpStatus.OK).json(autorBuscar)
  } 
}
