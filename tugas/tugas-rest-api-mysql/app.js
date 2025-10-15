const express = require("express");
const router = require("../tugas-rest-api-mysql/src/routes/main");
const app = express();
const port = 3000;
app.use(express.json());

app.use("/api", router);
app.listen(port),
  () => {
    console.log(`app listening on port ${port}`);
  };
