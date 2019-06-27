var express = require('express');
var app = express();
var mongoose = require('mongoose');
var book = require('./models/book');
var cors = require("cors");
var bodyParser = require("body-parser");
var index = require("./routes/mainRoute");
const graphqlHTTP = require('express-graphql');
var {
  buildSchema
} = require('graphql');

app.use(cors());
// app.use(express.static('../m public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
mongoose.connect('mongodb://localhost:27017/express', {
  useNewUrlParser: true
});
mongoose.connection.on("open", function () {
  console.log("done");
})
app.use("/api", index);
// var schema = buildSchema(`
//   type Query {
//     hello: String
//     findBook:[Book]
//   }
//   type Book{
//     author:String
//     title:String
//     name:String
//   }
// `);
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
app.listen(3000);