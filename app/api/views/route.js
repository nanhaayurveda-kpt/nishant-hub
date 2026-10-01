import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_URL,
  authToken: process.env.TURSO_TOKEN,
});

async function readCount(shouldIncrement) {
  const statements = [
    "CREATE TABLE IF NOT EXISTS page_views (id INTEGER PRIMARY KEY, count INTEGER NOT NULL)",
    "INSERT OR IGNORE INTO page_views (id, count) VALUES (1, 0)",
  ];

  if (shouldIncrement) {
    statements.push("UPDATE page_views SET count = count + 1 WHERE id = 1");
  }

  statements.push("SELECT count FROM page_views WHERE id = 1");

  const results = await db.batch(statements, "write");
  const lastResult = results[results.length - 1];

  return Number(lastResult.rows[0].count);
}

export async function GET() {
  const count = await readCount(false);
  return Response.json({ count });
}

export async function POST() {
  const count = await readCount(true);
  return Response.json({ count });
}