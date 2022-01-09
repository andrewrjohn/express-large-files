const express = require("express");
const path = require("path");
const fs = require("fs");
const { Readable } = require("stream");

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/download", (req, res) => {
  res.sendFile(path.join(__dirname, "/test.epub"));
});

app.get("/download-stream", (req, res) => {
  fs.createReadStream(path.join(__dirname, "test.epub")).pipe(res);
});

app.get("/download-buffer", (req, res) => {
  const file = fs.readFileSync(path.join(__dirname, "test.epub"));
  res.send(file);
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
