import { Module } from '@nestjs/common';
import db from '../db';

@Module({
  providers: [
    {
      provide: 'DATABASE',
      useValue: db
    }
  ],
  exports: ['DATABASE']
})

export class DrizzleModule {}