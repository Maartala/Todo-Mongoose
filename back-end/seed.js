import mongoose from "mongoose";
import { Todo } from "./model/Todo.js";

await mongoose.connect("mongodb://localhost:27017/todo-with-mongodb");

await Todo.create();

mongoose.disconnect();