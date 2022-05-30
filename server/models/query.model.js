import mongoose from "mongoose";

const Schema = mongoose.Schema;

const QuerySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  files: [
    {
      type: String,
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "USER",
    required: true,
  },
  postedAt: {
    type: Date,
    default:Date.now
  },
  response:[{
    text:"",
    author:{
      type:Schema.Types.ObjectId,
      ref:"USER"
    }
  }]
});

const Query = mongoose.model("QUERY", QuerySchema);

export default Query;
