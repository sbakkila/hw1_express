// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var chalk = require('chalk');
var models = require('./models'); // eslint-disable-line


const db = mongoose.connect('mongodb://localhost:27017/messageStorer').connection;

// add models to mongoose


console.log(chalk.yellow('Opening connection to mongodb')); // eslint-disable-line



// create a schema
var userSchema = new Schema({
  username: String,
  admin: Boolean,
  age: Number
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
