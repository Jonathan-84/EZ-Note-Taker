const express = require("express");
const apiRoutes = require('./Routes/api');
const htmlRoutes = require('./Routes/html');

const app = express();
const PORT = process.env.PORT || 3000;

// Routes user to the index page
/*app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Routes user to the notes page
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// Routes user the db.json file
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "db.json"));
});
*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})