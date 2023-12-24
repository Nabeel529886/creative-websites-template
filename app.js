const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.set("viewengine", "pug");
app.set("views", path.resolve(__dirname, "views"));

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.render("pages/home.pug", {
    title: "Home Page",
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about.pug", {
    title: "About Page",
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
