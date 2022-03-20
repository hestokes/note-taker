const router = require("express").Router();
const notesdb = require("../db/db.json");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  res.json(notesdb);
});

router.get("", (req, res) => {});

module.exports = router;
