import { connectionDB } from "./database.js";

export default async function addItem(req, res) {
  const text = req.body.text;
  if (!text) return res.sendStatus(400);

  const result = await connectionDB.query(
    `INSERT INTO items (text) 
        VALUES ($1)`,
    [text]
  );
  res.sendStatus(201);
}
