const express = require("express");
const User = require("../models/User");

const router = new express.Router();

router.post("/user", async (req, res) => {
  try {
    const user = new User({
      ...req.body,
    });

    await user.save();

    return res.status(201).send(user);
  } catch (error) {
    console.log(error);

    return res.status(400).send(error);
  }
});

router.get("/user", async (req, res) => {
  try {
    if (!(req.query && req.query.user_id)) {
      return res.status(401).send({ error: "user_id is required" });
    }
    const userList = await User.findOne({ _id: req.query.user_id }).populate(
      "overview"
    );

    res.status(201).send(userList);
  } catch (error) {
    console.log(error);

    res.status(400).send(error);
  }
});

module.exports = router;
