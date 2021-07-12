import { connectionDB } from "./database.js";

export default async function getItems(_, res) {
  const result = await connectionDB.query(`SELECT * FROM items`);
  res.status(200).send(result.rows);
}
