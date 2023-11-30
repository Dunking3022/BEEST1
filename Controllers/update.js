const express = require('express');
const post = require('../Models/Post');

exports.updatePost = async (req,res) => {
    try{
        const id = req.params['id'];
        const userData = req.body;
        await post.findOneAndReplace({_id: id},userData);
        res.send("The post was updated succesfully!");

    }
    catch(err){
        res.status(406).send("No such entry found to update. Please retry!");
        console.log(err);
    }
}