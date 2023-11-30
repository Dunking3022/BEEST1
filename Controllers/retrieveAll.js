const express = require('express');
const post = require('../Models/Post');


exports.retrieveAll = async(req,res) => {
    try{
        post.find({})
        .then((books)=>{
            res.send(books);
        }
        )
        .catch((err)=>{
            res.send("There was an error getting the posts to you")
        })

    }
    catch{
        res.send("there was an error fetching the posts")
    }
}