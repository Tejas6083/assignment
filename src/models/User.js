const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: {
    type: String,
    reuired: true,
    unique: true,
    maxlength: 128,
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true,
    maxlength: 30,
  },
  overview: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "overView",
  },
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_post",
  },
});

userSchema.virtual("overView", {
  ref: "overView",
  localField: "overview",
  foreignField: "owner",
});

userSchema.virtual("user_post", {
  ref: "user_post",
  localField: "posts",
  foreignField: "owner",
});

const user = mongoose.model("user", userSchema);

module.exports = user;
