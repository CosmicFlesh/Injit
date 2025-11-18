import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasModule } from './Mascotas/mascotas.module';
import { UsuariosModule } from './Usuarios/Usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './Database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule, DatabaseModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: +configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'mamarre'),
        database: configService.get<string>('DB_DATABASE', 'injit'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    MascotasModule,
    UsuariosModule
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
