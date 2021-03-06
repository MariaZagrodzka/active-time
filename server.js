"use strict";

//first we import our dependencies...
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var User = require("./model/user");
var UserSession = require("./model/userSession");

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 3001;

//db config
var mongoDB = "mongodb://Admin:admin123@ds161610.mlab.com:61610/testdbb";
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  //and remove cacheing so we get the most recent comments
  res.setHeader("Cache-Control", "no-cache");
  next();
});

//now  we can set the route path & initialize the API
router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

router
  .route("/user")
  //retrieve all comments from the database
  .get(function(req, res) {
    //looks at our Comment Schema
    User.find(function(err, users) {
      if (err) res.send(err);
      //responds with a json object of our database comments.
      res.json(users);
    });
  })

  //post new comment to the database
  .post(function(req, res) {
    var user = new User();

    const { body } = req;
    const { password } = body;
    let { email } = body;

    if (!email) {
      return res.send({
        success: false,
        message: "Error: Email cannot be blank."
      });
    }
    if (!password) {
      return res.send({
        success: false,
        message: "Error: Password cannot be blank."
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    const newUser = new User();
    newUser.email = email;
    newUser.password = password;
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }
      return res.send({
        success: true,
        message: "Signed up"
      });
    });
  });

router.route("/signin").post((req, res, next) => {
  const { body } = req;
  const { password } = body;
  let { email } = body;
  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email cannot be blank."
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password cannot be blank."
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  User.find(
    {
      email: email
    },
    (err, users) => {
      if (err) {
        console.log("err 2:", err);
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid User",
          test: users.length
        });
      }
      const user = users[0];
      if (password !== user.password) {
        return res.send({
          success: false,
          message: "Error: Invalid Password"
        });
      }
      // Otherwise correct user
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }
        return res.send({
          success: true,
          message: "Valid sign in",
          token: doc._id
        });
      });
    }
  );
});
router.route("/account/logout").post(function(req, res) {
  // Get the token
  const { query } = req;
  const { token } = query;
  // ?token=test
  // Verify the token is one of a kind and it's not deleted.
  UserSession.findOneAndUpdate(
    {
      _id: token,
      isDeleted: false
    },
    {
      $set: {
        isDeleted: true
      }
    },
    null,
    (err, sessions) => {
      if (err) {
        console.log(err);
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }
      return res.send({
        success: true,
        message: "Good"
      });
    }
  );
});

//Use our router configuration when we call /api
app.use("/api", router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
