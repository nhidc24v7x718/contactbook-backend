const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/contact.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);

// handle 404 response
app.use((req, res, next) => {
  return next(new Error("404", "Resource not found"));
});

module.exports = app;