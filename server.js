const express = require("express");
const path = require("path");

let initial_path = path.join(__dirname, "public");

let app = express();
app.use(express.json());
app.use(express.static(initial_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(initial_path, "index.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(initial_path, "signup.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(initial_path, "login.html"));
});

app.get("/:id", (req, res) => {
  console.log(req.params);
  res.sendFile(path.join(initial_path, "about.html"));
});

app.use((req, res) => {
  res.json("404");
});

app.listen(3000, () => {
  console.log("listening on port 3000......");
});
