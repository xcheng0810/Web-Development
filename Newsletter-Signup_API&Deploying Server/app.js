const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
// For this we need to install the npm module @mailchimp/mailchimp_marketing
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();

// in order for server to serve up static files such as CSS
// The public folder which holds the CSS
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Sending the signup.html file to the browser as soon as a request is made on localhost:3000
// A dynamic port that Heroku will define on the go
app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

// Setting up MailChimp
mailchimp.setConfig({
 apiKey: "ee721da7c02aa570dddb3bb7bf3f94fe-us21",
 server: "us21"
});

/* send json data to Mailchimp */
// As soon as the sign in button is pressed execute this
app.post("/", function(req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    // it is an array of objects
    // only a single object in the array, because we're going to subcribe one person at a time
    members: [
      {
        email_address: email,
        status: "subscribed",

        // the type of merge_feilds is an object
        merge_feilds: {
          FNAME: firstName,
          LNAME: lastName}
      }]
  }

  // we need a json form of data, we need to turn into a flatpack json
  const jsonData = JSON.stringify(data);

  /* make request */

  // url: comes from the main Mailchimp endpoint
  // post members to list
  const url = "https://us21.api.mailchimp.com/3.0/lists/8670c40c4e";

  // options: accept all options from http.request()
  const options = {

    // specify the type of request we want to make: POST
    method: "POST",
    // should not have space after colon!!!
    auth: "Chelsey:ee721da7c02aa570dddb3bb7bf3f94fe-us21",

  };

  // https.request: post data to the external resource
  // response: get response from Mailchimp sercer
  const request = https.request(url, options, function(response){
    response.on("data", function(data){
      console.log(JSON.parse(data));

      if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
      }else{
        res.sendFile(__dirname + "/failure.html");
      }

    });
  });

  request.write(jsonData);
  request.end();

});

app.post("/failure", function(req, res){
  res.redirect("/");
})
