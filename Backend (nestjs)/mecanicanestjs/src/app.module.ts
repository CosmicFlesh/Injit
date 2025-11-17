import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './Producto/producto.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'posta',
      database: 'mecanica',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],})
export class AppModule { }



//@Module({
 // imports: [ProsuctoModule],
  //controllers: [AppController],
  //providers: [AppService],
//})
//export class AppModule { }
