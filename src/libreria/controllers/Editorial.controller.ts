import { LibroService } from './../services/libro.service';
import { Libro } from './../entities/libro.entity';
import { createDtoEditorial } from './../dto/createDtoEditorial';
import { EditorialService } from './../services/editorial.service';
import { Body, Controller, Get, HttpStatus, Param, ParseArrayPipe, Post, Put, Res } from '@nestjs/common';


@Controller('api/editorial')
export class EditorialController{
  constructor(private editorialService:EditorialService){}
  @Post('/create')
  async crearEditorial(@Res() response,@Body() editorial:createDtoEditorial ){
    const newEditorial = await this.editorialService.create(editorial)
    
    return response.status(HttpStatus.CREATED).json(editorial) 
  }
  @Put('/update/:id')
  async actualizarEditorial (@Res() response,@Body() editorial:createDtoEditorial, @Param('id') id){
    const updateEditorial = await this.editorialService.update(id,editorial)

    return response.status(HttpStatus.OK).json(updateEditorial)
  }
  @Get('/list')
  async listarEditorial (@Res() response){
    const listaEditoriales= await this.editorialService.findAll()
    return response.status(HttpStatus.OK).json(listaEditoriales)
  }
  @Get('/buscarList/:field/:valor')
  async buscarListaEditorial(@Res() response,@Param('field') field , @Param('valor') valor){
    const busquedaListada= await this.editorialService.findByField(field,valor)
    return response.status(HttpStatus.OK).json(busquedaListada);
  }
  @Get('/buscar/:field/:valor')
  async obtenerEditorial (@Res() response, @Param('field') field,@Param('valor') valor ){
    const buscar = await this.editorialService.findByOne(field,valor)
    return response.status(HttpStatus.OK).json(buscar)
  }
}