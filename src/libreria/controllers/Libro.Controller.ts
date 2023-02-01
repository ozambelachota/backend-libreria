import { Libro } from './../entities/libro.entity';
import { Editorial } from './../entities/editorial.entity';
import { createDtoLibro } from './../dto/createDtoLibro';
import { AutorService } from './../services/autor.service';
import { EditorialService } from './../services/editorial.service';
import { CategoriaService } from './../services/categoria.service';
import { LibroService } from './../services/libro.service';
import { Body, Controller, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';

@Controller('api/libro')
export class LibroController{
  constructor(private libroService:LibroService, private categoriaServie:CategoriaService,private editorialService:EditorialService, private autorService:AutorService){}
  @Post('/create')
  async crearLibro(@Res() response, @Body() libro: createDtoLibro){
    const newLibro = await this.libroService.create(libro);

    return response.status(HttpStatus.CREATED).json(newLibro);
  }
  @Get('/listar')
  async listadoLibro(@Res() response){
    const listadoLibros= await this.libroService.findAll()
  }
  @Put('/update/:id')
  async actualizarLibro(@Res() response, @Body() libro:createDtoLibro, @Param('id') id ){
    const updateLibro= this.libroService.update(id,libro)
    return response.status(HttpStatus.OK).json(updateLibro)
 }

}