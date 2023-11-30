const express = require('express');
const mongoose = require('mongoose');
const db = require('./Middlewares/db');
const post = require('./Routes/post');
const posts = require("./Models/Post");


app = express();
app.use(express.json());
app.use("/post",post);

db.connectToDB();

app.listen(3001, () => {
    console.log(`Server running on port 3001`);
  }
);