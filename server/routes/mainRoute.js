var express = require('express');
var mongoose = require('mongoose');
var book = require('../models/book');
var app = express()
var router = express.Router();
router.get('/getBook', function (req, res) {


  book.find(function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result)
    }
  });

})
myFunction = () => {
  book.find(function (err, result) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log(result);
      return result
    }
  });
}

router.delete("/deleteBook/:id", function (req, res, next) {
  console.log(req.params.id);
  book.deleteOne({
    _id: req.params.id
  }, function (err, result) {
    if (err) {
      console.log(err);
    } else {

      book.find(function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send(result)

        }
      })
    }
  })

})
router.post("/addBook", function (req, res, next) {
  let createBook = {
    name: req.body.name,
    author: req.body.author,
    title: req.body.title
  }
  console.log(req.body);
  book.create(createBook, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      book.find(function (err, result) {
        if (err) {
          console.log(err);
        } else {
          res.send(result)
        }
      })
    }
  })

})
router.put("/updateBook", function (req, res) {
  console.log(req.body.id);
  book.findByIdAndUpdate({
    _id: req.body.id
  }, req.body, function (err, result) {
    if (err) {
      console.log(err);
    } else {

      book.find(function (err, _result) {
        if (err) {
          console.log("error1");
        } else {
          res.send(_result)
        }
      })
    }
  })
})
module.exports = router;