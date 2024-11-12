import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { HelloWorldController } from './hello-world/hello-world.controller';
import { HelloWorldService } from './hello-world/hello-world.service';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env', '.env.development', '.env.production'],
    isGlobal: true
  }), DrizzleModule, HelloWorldModule],
  controllers: [AppController, HelloWorldController],
  providers: [AppService, HelloWorldService]
})
export class AppModule {}