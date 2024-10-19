import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CatController],
  providers: [AppService, CatService],
})
export class AppModule {}
