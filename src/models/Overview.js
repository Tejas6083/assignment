const mongoose = require("mongoose");

const overviewSchema = new mongoose.Schema({
  blogs: [
    {
      posts: [
        {
          total: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 80,
          },
          per_day: [Number],

          type: mongoose.Schema.Types.Mixed,
          trim: true,
          required: true,
        },
      ],
      comments: [
        {
          total: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 80,
          },
          per_day: [Number],

          type: mongoose.Schema.Types.Mixed,
          trim: true,
          required: true,
        },
      ],
      new_customers: [
        {
          total: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 80,
          },
          per_day: [Number],

          type: mongoose.Schema.Types.Mixed,
          trim: true,
          required: true,
        },
      ],
      subscribers: [
        {
          total: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 80,
          },
          per_day: [Number],

          type: mongoose.Schema.Types.Mixed,
          trim: true,
          required: true,
        },
      ],

      type: mongoose.Schema.Types.Mixed,
      trim: true,
      required: true,
    },
  ],

  users_overview: [
    {
      current_month: [Number],
      last_month: [Number],

      type: mongoose.Schema.Types.Mixed,
      trim: true,
      required: true,
    },
  ],

  users_by_device: [
    {
      device: [String],
      total: [Number],

      type: mongoose.Schema.Types.Mixed,
      trim: true,
      required: true,
    },
  ],

  referals: [mongoose.Schema.Types.Mixed],

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    unique: true,
    ref: "user",
  },
});

overviewSchema.virtual("users", {
  ref: "user",
  localField: "owner",
  foreignField: "overview",
});

const overview = mongoose.model("overView", overviewSchema);

module.exports = overview;
