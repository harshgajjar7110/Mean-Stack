var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }

})
var Book = mongoose.model("Book", bookSchema);
module.exports = Book;