import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const pool = new Pool({
  connectionString: process.env.AVIEN_POSTGRES_SERVICE_URL,
  ssl: {
    rejectUnauthorized: false,
    ca: fs.readFileSync(path.join(__dirname, 'ca.pem')).toString()
  }
});

const db = drizzle(pool);

export default db;