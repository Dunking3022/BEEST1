const express = require('express');
const post = require('../Models/Post');

exports.createPost = async (req,res) => {
    try{
        const userData = req.body;
        await post.create(userData);
        res.send("Post created successfully!");
    }
    catch(err){
        res.send("Error encountered!");    
    }
}