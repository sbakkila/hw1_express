var mongoose = require('mongoose');

const SomethingSchema = new mongoose.Schema({
  aString: String,
});

mongoose.model('Something', SomethingSchema);
