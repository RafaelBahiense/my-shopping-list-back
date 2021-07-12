import path from "path";
import dotenv from "dotenv";

export function setEnv() {
    const envPath = "local.env";
    dotenv.config({ path: path.resolve(".", envPath) });
}