import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './authors/authors.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module'; // Importe o DatabaseModule

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule, // Adicione o DatabaseModule ao array imports
    AuthorsModule,
    BooksModule,
    AuthModule,
  ],
})
export class AppModule {}
