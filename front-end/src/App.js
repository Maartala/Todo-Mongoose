import { useState, useEffect } from "react";
import './App.css';
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get("/api/todo")
      setTodos(response.data)
    }
    fetchTodos()
  }, []);
  // console.log(todos[0].title);

  return (
    <div className="App">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(e);
          const title = e.currentTarget[0].value;
          console.log(title);

          const resp = await axios.post("/api/todo", { title });
          setTodos((prevState) => [...prevState, resp.data])
          console.log(resp);
        }}

      >
        <label>Todo:</label>
        <input type="text" id="title" />

        <button>Submit</button>
      </form>

      {todos.map((ele) => {
        console.log(ele);
        return (
          <div key={ele._id}>
            <p>{ele.title}</p>
            <br />
          </div>

        )
      })}

    </div>
  );
}

export default App;
