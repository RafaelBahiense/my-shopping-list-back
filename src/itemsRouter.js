import { Router } from "express";

import getItems from "./getItems.js";
import addItem from "./addItem.js";

const router = Router();

router.post("/items", (req, res ) => addItem(req, res));

router.get("/items", (req, res ) => getItems(req, res));

export const Items = router;
