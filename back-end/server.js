import express from "express";
import mongoose from "mongoose";
import { Todo } from "./model/Todo.js";

mongoose.connect("mongodb://localhost:27017/todo-with-mongodb");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.get("/api/todo", async (req, res) => {
    const todos = await Todo.find();
    res.send(todos)
});

app.post("/api/todo", async (req, res) => {
    const newTodo = await Todo.create(req.body);
    res.send(newTodo);
});

app.listen(PORT, () => {
    console.log("Server running on Port", PORT);
})