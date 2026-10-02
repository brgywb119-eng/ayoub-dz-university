const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const publicDir = path.join(__dirname, "public");

app.use(express.json());

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/lessons/biologie-cellulaire.html", (req, res) => {
  res.sendFile(path.join(publicDir, "lessons", "biologie-cellulaire.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log(" Ayoub DZ University");
  console.log(" http://localhost:3000");
  console.log("=================================");
});
