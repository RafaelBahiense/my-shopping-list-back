import pg from "pg";

import { setEnv } from "./env.js"

const { Pool } = pg;
setEnv();
const connection = new Pool({
  user: "bootcamp_role",
  password: "senha_super_hiper_ultra_secreta_do_role_do_bootcamp",
  host: "localhost",
  port: 5432,
  database: "my_shopping_list"
});

export default connection;
