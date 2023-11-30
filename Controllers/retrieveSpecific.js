const express = require('express');
const post = require('../Models/Post');


exports.retrieveSpecific = async(req,res) => {
    try{
        const id = req.params['id'];
        console.log(id);
        post.find({'_id':id})
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