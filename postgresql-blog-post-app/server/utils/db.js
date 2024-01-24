// Creating PostgreSQL Client here
import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  connectionString:
    "postgresql://postgres:H3bNtLZXzveCUBTk2kEe@localhost:5432/my-blog-app",
});

export { pool };
