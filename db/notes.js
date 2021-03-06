const fs = require("fs");
const util =require("util");
const uuidv1 = require('uuid/v1')

console.log(uuidv1())

const readfile= util.promisify(fs.readFile);
const writefile=util.promisify(fs.writeFile);

class Notes {
    readnotes() {
        return readfile("db/db.json", "utf8") 
    }
    writenotes(note) {
        return writefile("db/db.json", JSON.stringify(note));
    }
    getnotes() {
        return this.readnotes()
        .then(data=> {
         let foundnotes;
         try{
             foundnotes = [].concat(JSON.parse(data));
         }   
         catch(err) {
             foundnotes= [];
         }
         return foundnotes
        });
    }

    addnotes(note) {
        const {title, text} = note;
        if (!title || !text){
        console.log ("There must be a Title and Text!")
        }
        const finalnote = {title, text, id:uuidv1()};
        return this.getnotes()
        .then(data => [...data, finalnote])
        .then(updateddata => this.writenotes(updateddata))
        .then(()=>finalnote)
    }

    removenote(id) {
        return this.getnotes()
        .then(data=>data
        .filter(data=>data.id !== id))
        .then(filtered => this.writenotes(filtered))
    }

}
module.exports= new Notes();