import { Editorial } from './libreria/entities/editorial.entity';
import { Libro } from './libreria/entities/libro.entity';
import { Categoria } from './libreria/entities/categoria.entity';
import { Autor } from './libreria/entities/autor.entity';
import {Module,Global,DynamicModule} from '@nestjs/common'

import {TypeOrmModule} from '@nestjs/typeorm'

import { EnvModule } from './env.module'

import { EnvService } from './env.service'

function DatabaseOrmModule():DynamicModule {
  const config = new EnvService().read()

  return TypeOrmModule.forRoot({
    type:'mysql',
    host:config.DB_HOST,
    port:config.DB_PORT,
    username:config.DB_USER,
    password:config.DB_PASSWORD,
    database:config.DB_NAME,
    entities:[Autor,Categoria,Libro,Editorial],
    synchronize:true,
    dropSchema:false,
  })
}

@Global()
@Module({
  imports:[EnvModule,DatabaseOrmModule()]
})

export class DataBaseModule{}