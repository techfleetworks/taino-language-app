import { Inject, Injectable } from '@nestjs/common';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { testTable } from 'src/db/schema';

@Injectable()
export class HelloWorldService {
    constructor(
        @Inject('DATABASE') 
        private readonly db: NodePgDatabase
    ) {}

    async getAllNames() {
        return this.db.select().from(testTable);
    }

    async postName(name: string) {
        return this.db.insert(testTable).values({ name });
    }
}
