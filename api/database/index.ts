import postgres from 'pg';

const database = new postgres.Pool({ connectionString: process.env.DATABASE_URL });

export default database;
