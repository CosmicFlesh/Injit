import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { neon } from '@neondatabase/serverless';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env', '.env.production', '.env.local'],
  })],
  providers: [
    {
      provide: 'POSTGRES_POOL',
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const url = config.get<string>('DATABASE_URL');
        if (!url) {
          throw new Error('❌ DATABASE_URL no está definida en el archivo .env');
        }
        return neon(url);
      },
    },
  ],
  exports: ['POSTGRES_POOL'],
})
export class DatabaseModule {}
