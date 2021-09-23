const express = require("express");
const cors = require("cors");

const app = express();

app.enable("trust proxy");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Crystals 💎💍!",
  });
});

app.use((error, req, res, next) => {
  res.status(500);
  res.json({
    message: error.message,
  });
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
