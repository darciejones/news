var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
/* var bodyParser = require("body-parser"); */
var logger = require("morgan");

var axios = require("axios");
var cheerio = require("cheerio");



var db = require("./models");

var PORT = process.env.PORT || 3000;

var app = express();

// var router = express.Router();

// require("./news/config/routes")(router);





app.use(express.urlencoded({ extended: true }));
//app.use(express.static(__dirname + "/public"));
app.use(express.json());

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));



app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/animalnews"; //local host db name 

mongoose.connect(db,  { 
    useMongoClient: true 
    
    })
    
    .);//then and catch
   

});  //if this doest work try:   mongoose.connect('mongodb://local...', { useMongoClient: true}


app.use(logger("dev"));



mongoose.Promise = global.Promise;


app.listen(PORT, function() {
    console.log("listening on port" + PORT);
}); 