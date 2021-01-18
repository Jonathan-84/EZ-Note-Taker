const Notes = require("../db/notes");
const fs = require('fs');
const uuidv1 = require('uuid/v1');

const router= require("express").Router();

router.get("/notes", function(req,res) {
    Notes.getnotes()
   //.then(data=>res.json(data))
   .then((note) => res.json(note)) 
   .catch((err) => res.status(500).json(err));
});

router.post("/notes", function(req,res) {
    Notes.addnotes(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.status(500).json(err));
});


/*
router.delete("/api/notes/:id", function(req, res) {
        
    let notesid = req.params.id

    for (var i = 0; i < Notes.length; i++) {
        if(Notes[i].id === notesid) {
            let objIndex = Notes.indexOf(Notes);
            Notes.splice(objIndex,1);
        }
    res.send(Notes);
}*/
router.delete("/notes/:id", function (req, res) {
    //params means it will read the id from the url
     Notes.removenote(req.params.id) 
     //the broswer has removed note or ok: true 
     .then(() => res.send(200))          
         .catch((err) => 
         console.log(err));
 });
 
 module.exports = router;
