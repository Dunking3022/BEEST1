const express = require('express');
const router = express.Router();
const createPost = require('../Controllers/createPost');
const fetchAll = require('../Controllers/retrieveAll');
const fetch = require('../Controllers/retrieveSpecific');
const update = require('../Controllers/update');

router.get("/",(req,res)=>{res.send("Welcome to PostDB")});
router.post("/create",createPost.createPost);
router.get("/getAll",fetchAll.retrieveAll);
router.get("/get/:id",fetch.retrieveSpecific);
router.post("/update/:id",update.updatePost);

module.exports = (router);