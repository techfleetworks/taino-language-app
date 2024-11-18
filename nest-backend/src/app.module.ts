import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { VocabularyItemService } from './vocabulary-item/vocabulary-item.service';
import { VocabularyItemController } from './vocabulary-item/vocabulary-item.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
  ],
  controllers: [AppController, VocabularyItemController],
  providers: [AppService, PrismaService, VocabularyItemService],
})
export class AppModule {}