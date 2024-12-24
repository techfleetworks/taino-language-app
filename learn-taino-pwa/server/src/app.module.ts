import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { LessonsController } from './lessons/lessons.controller';
import { LessonsService } from './lessons/lessons.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development', '.env.production'],
      isGlobal: true,
    }),
  ],
  controllers: [AppController, LessonsController],
  providers: [AppService, PrismaService, LessonsService],
})
export class AppModule {}