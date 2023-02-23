const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// parse data that comes from a HTML form
// allow us to post nested objects
// Body Parser: parse the HTML request that we get.
// urlencoded...: get access to the form data.
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  //console.log(__dirname);
});

app.post("/", function(req, res){
  // return the properties(comes from the name attribute) of the object body
  // console.log(req.body.num1);
  // console.log(req.body);

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname +"/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){

  // parse a string argument and returns a floating point number
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = Math.round(weight / Math.pow(height, 2));

  res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
