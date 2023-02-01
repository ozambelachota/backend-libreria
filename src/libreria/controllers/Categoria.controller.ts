import { createDtoCategoria } from './../dto/createDtoCategoria';
import { CategoriaService } from './../services/categoria.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';

@Controller('api/categoria')
export class CategoriaController{
  constructor(private readonly categoriaService:CategoriaService){}
  @Post('/create')
  async createCategoria(@Res() response, @Body() categoria:createDtoCategoria ){
    const newCategoria= await this.categoriaService.create(categoria)
    return response.status(HttpStatus.CREATED).json(newCategoria)
  }
  @Get('/list')
  async listarCategoria(@Res() response ){
    const listaCategoria = await this.categoriaService.findAll();
    return response.status(HttpStatus.OK).json(listaCategoria)
  }
  @Put('/update/:id')
  async actualizarCategoria(@Res() response, @Body() categoria:createDtoCategoria, @Param('id') id){
      const actualizaCategoria = await this.categoriaService.update(id,categoria)
      return response.status(HttpStatus.OK).json(actualizaCategoria)
  }  
  @Delete('/delete/:id')
  async eliminarCategoria(@Res() response, @Param('id') id){
    const eliminaCategoria= await this.categoriaService.delete(id)
    return response.status(HttpStatus.OK).json(eliminaCategoria)
  }
  @Get('buscar/:field/:valor')
  async buscarCategoria(@Res() response, @Param('field') field,@Param('valor') valor ){
    const obtenerCategoria = await this.categoriaService.findByOne(field,valor)
    return response.status(HttpStatus.OK).json(obtenerCategoria)
  }
  @Get('buscarList/:field/:valor')
  async buscarListCategoria(@Res() response, @Param('field') field,@Param('valor') valor){
    const obtenerListaCategoria= await this.categoriaService.findByField(field, valor) 
    return response.status(HttpStatus.OK).json(obtenerListaCategoria)
  }
  
}