const express = require("express");
const Post = require("../models/Post");

const router = new express.Router();

router.post('/post', async(req,res) => {

    try {

        const post = new Post({
            ...req.body
        });

        await post.save();

        return res.status(201).send(post);

    } catch(error) {
        console.log(error);

        return res.status(400).send(error);
    }

});

router.get('/post', async(req,res) => {

    try {

        const postList = await Post.findOne({owner: req.query.user_id});

        if (!postList) {
            return res.status(404).send({error: "No post found"});
        }
        return res.status(200).send(postList);

    } catch(error) {
        console.log(error)

        return res.status(400).send((error));
    }

});

module.exports = router;