var express = require('express');
var logger = require('morgan-body'); // express middleware
const User = require('./mongoose/db');

// initialize express app
const app = express();

// hook logger to express app, thing that shows incoming requests in console
logger(app);


app.get('/:username/:admin/:age', function(req, res, next) {
      res.send(`Your username is ${req.params.username}, you are an admin: ${req.params.admin}, you are ${req.params.age} years old!`)


      var user1 = new User({
        username: `${req.params.username}`,
        admin: `${req.params.admin}`,
        age: `${req.params.age}`
      });

      console.log(user1);

});


// catch-all route
app.get('/*', function(req, res) {
  res.send('Welcome to the registration page. Please enter your username slash admin status (TRUE OR FALSE) slash password in the url');
});

// begin listening for requests, i.e. initialize server
app.listen(8888, () =>
  console.log('app up and running at http://localhost:8888'));
