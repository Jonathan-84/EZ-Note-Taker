const { Router } = require("express");

const path = require("path");
const router= require("express").Router()


// Routes user to the index page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Routes user to the notes page
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

module.exports= router