import pg from "pg";

import { setEnv } from "./env.js"

setEnv();

const {
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  DB_PORT
} = process.env;

const { Pool } = pg;

export const connectionDB = new Pool({
  user: DB_USERNAME,
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  database: DB_DATABASE,
  password: DB_PASSWORD,
});
