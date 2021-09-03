const express = require("express");
const app = express();
const port = 4000;
const mongoDB = require('./src/config');
const router = require('./src/routers');

//connect mongoDB
mongoDB();
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(router);
app.listen(port, ()=> {
  console.log(`App running on port ${port}.`);
});