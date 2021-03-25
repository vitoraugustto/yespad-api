const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

let dadosTextarea = "";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ data: dadosTextarea });
});

app.post("/", (req, res) => {
  const { value } = req.body;

  dadosTextarea = value;

  res.status(200).send({ data: dadosTextarea });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
