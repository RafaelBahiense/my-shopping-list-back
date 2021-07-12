import app from "./app.js";

import { setEnv } from "./env.js";

setEnv();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
