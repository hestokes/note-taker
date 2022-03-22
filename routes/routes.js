const router = require("express").Router();
const notesdb = require("../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
  res.json(notesdb);
});

router.post("/notes", (req, res) => {
  console.log(req.body);

  let newNote = {
    id: Math.floor(Math.random() * 100),
    title: req.body.title,
    text: req.body.text,
  };

  notesdb.push(newNote);

  fs.writeFile("./db/db.json", JSON.stringify(notesdb), (err) => {
    if (err) throw err;
  });
});

module.exports = router;
