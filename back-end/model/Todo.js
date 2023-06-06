import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
}, { collection: "todoMongooses" });

export const Todo = mongoose.model("Todo", todoSchema);
