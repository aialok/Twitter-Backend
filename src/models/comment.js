import mongoose from "mongoose";
const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },

    commentable: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Like",
      },
    ],

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    comments: [
      { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Comment" },
    ],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
