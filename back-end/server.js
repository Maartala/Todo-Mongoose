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

app.delete("/api/todo/:id", async (req, res) => {
    const todoId = req.params.id;
    try {
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        if (deletedTodo) {
            res.send({ message: "Todo wurde erfolgreich gelöscht" });
        } else {
            res.status(404).send({ error: "Upsi...Todo konnte nicht gelöscht werden :(" })
        }
    } catch (error) {
        res.status(500).send({ error: "Server error" })
    }
});


app.listen(PORT, () => {
    console.log("Server running on Port", PORT);
})