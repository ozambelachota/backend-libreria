import { LibroController } from './controllers/Libro.Controller';
import { EditorialController } from './controllers/Editorial.controller';
import { CategoriaController } from './controllers/Categoria.controller';
import { AutorControllers } from './controllers/Autor.controller';
import { LibroService } from './services/libro.service';
import { Categoria } from './entities/categoria.entity';
import { Autor } from './entities/autor.entity';
import { Libro } from './entities/libro.entity';
import {Module} from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Editorial } from './entities/editorial.entity';
import { AutorService } from './services/autor.service';
import { CategoriaService } from './services/categoria.service';
import { EditorialService } from './services/editorial.service';

@Module({
  imports:[TypeOrmModule.forFeature([
    Libro,Autor,Categoria,Editorial,
  ])],
  providers:[AutorService,CategoriaService,EditorialService,LibroService],
  controllers:[AutorControllers,CategoriaController,EditorialController,LibroController],
})
export class LibroModule{}