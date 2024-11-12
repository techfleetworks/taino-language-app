import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world.controller';
import { HelloWorldService } from './hello-world.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HelloWorldController],
  providers: [HelloWorldService]
})
export class HelloWorldModule {}
