import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MascotasModule } from './Mascotas/mascotas.module';
import { UsuariosModule } from './Usuarios/Usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './Database/database.module';

@Module({
  imports: [DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule, ],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'ep-bitter-cake-ahzr05wo-pooler.c-3.us-east-1.aws.neon.tech'),
        port: +configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'neondb_owner'),
        password: configService.get<string>('DB_PASSWORD', 'npg_qz8VvJnNh0bI'),
        database: configService.get<string>('DB_DATABASE', 'neondb'),
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
