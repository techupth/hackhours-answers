// Create PostgreSQL Connection Pool here !
import * as pg from "pg";
const { Pool } = pg.default;

const connectionPool = new Pool({
  // ตรงนี้ต้องเปลี่ยน connectionString เป็นของตัวเองด้วยนะ
  connectionString:
    "postgresql://your-db-username:your-db-password@localhost:5432/your-db-name",
});

export default connectionPool;
