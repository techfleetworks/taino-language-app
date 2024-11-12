import type { Config } from 'drizzle-kit';
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';

const cert = fs.readFileSync(path.join(__dirname, 'ca.pem')).toString();
console.log('Certificate loaded:', cert.slice(0, 50) + '...');
console.log('Connection URL:', process.env.AVIEN_POSTGRES_SERVICE_URL?.slice(0, 20) + '...');

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.AVIEN_POSTGRES_SERVICE_URL!,
    ssl: {
      rejectUnauthorized: false,
      ca: cert,
      checkServerIdentity: () => undefined
    }
  },
} satisfies Config;