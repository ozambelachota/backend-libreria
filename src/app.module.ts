import { LibroModule } from './libreria/libreria.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database.module';

@Module({
  imports: [DataBaseModule,LibroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
