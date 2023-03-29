// Creating PostgreSQL Client here
import * as pg from "pg";
const { Pool } = pg.default;

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "HH-postgreSQL-nodejs",
//   password: "    ",
//   port: 5432,
// });

const pool = new Pool({
  connectionString:
    "postgresql://postgres:    @localhost:5432/HH-postgreSQL-nodejs",
});

export { pool };
