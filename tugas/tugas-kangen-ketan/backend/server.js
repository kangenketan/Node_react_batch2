const express = require("express");
const router = require("./src/routes/main");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", router);
app.use("/", (req, res) => {
  res.send("Ini tampilan jualan Kangen Ketan");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
