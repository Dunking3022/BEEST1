const express = require('express');
const post = require('../Models/Post');

exports.deleteBook = async(req,res) => {
    try{
        const id = req.params['id'];
        console.log(query);
        post.findOneAndDelete({ _id : id})
        .then((book)=>{
            res.send("Deleted Succesfully!");
        }
        )
        .catch((err)=>{
            res.send("id not founnd!");
        })

    }
    catch{
        res.send("Error!");
    }
}