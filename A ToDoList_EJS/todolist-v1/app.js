const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// date() is actually running the function in the module
// console.log(date());

const app = express();

// It is possible to push new items into a const array
// But it's not possible to assign it to a brand new array
// The same as an object: can change the values in an object, but can't overwrite the object
const items = ["Buy Food", "Make Food", "Eat Food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  // activate the date function
  const day = date.getDate();
  // let day = date.getDay();

  res.render("list", {listTitle: day, newitemLists: items});
});

app.post("/", function(req, res){
  //console.log(req.body);
  const item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newitemLists: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
