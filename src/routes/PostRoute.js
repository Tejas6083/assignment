const express = require("express");
const Post = require("../models/Post");
const User = require("../models/User");

const router = new express.Router();

router.post("/post", async (req, res) => {
  try {
    const post = await Post.findOne({ owner: req.body.owner });
    let details;

    if (post) {
      (post.posts = [...post.posts, ...req.body.posts]),
        (details = await post.save());
    } else {
      const create = new Post({
        posts: [...req.body.posts],
        owner: req.body.owner,
      });

      details = await create.save();
    }

    const user = await User.findOne({ _id: details.owner });
    user.posts = details._id;
    await user.save();

    return res.status(201).send(details);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
});

router.get("/post", async (req, res) => {
  try {
    const postList = await Post.findOne({ owner: req.query.user_id }).populate('owner');

    if (!postList) {
      return res.status(404).send({ error: "No post found" });
    }
    return res.status(200).send(postList);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
});

module.exports = router;
