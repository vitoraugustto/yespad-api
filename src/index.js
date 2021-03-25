const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

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

const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
