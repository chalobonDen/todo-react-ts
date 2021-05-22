import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import DoneList from "./components/DoneList";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuid } from "uuid";

export interface ITodo {
  id: any;
  text: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: any;
  text: string;
  isDone: boolean;

  constructor(text: string = "", isDone: boolean = false) {
    this.id = uuid();
    this.text = text;
    this.isDone = isDone;
  }
}

function App() {
  const newTodos = [
    new Todo("homework1"),
    new Todo("homework2"),
    new Todo("homework3"),
  ];

  const [todos, setTodos] = useState(newTodos);

  function addTodo(todo: Todo) {
    setTodos([todo, ...todos]);
  }

  function updateTodo(id: string, text: string, isDone: false) {
    // for (let i = 0; i < todos.length; i++) {
    //   console.log(todos[i].text);
    // }

    // for (let todo of todos) {
    //   console.log(todo.text);
    // }

    // todos.forEach((todo) => {
    //   console.log(todo.text);
    // });

    // const newTodo = todos.find((todo) => {
    //   if (todo.id === id) console.log(todo.text);
    // });

    console.log(`${id} ${text}`);
    const newtodo = todos.map((todo, index) => {
      if (todo.id === id) {
        return (
          (todo.id = `${id}`), (todo.text = `${text}`), (todo.isDone = false)
        );
        //  return (todos[index] = { text, isDone });
      } else {
        return todo;
      }
    });
    console.log(newtodo);

    // setTodos(newtodo);
    // if (todo.id === id) {
    //   const newTodo = {
    //     ...todos, todo
    //   }
    //   setTodos{newTodo}
    // }
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} updateTodo={updateTodo} />
      <DoneList todos={todos} setTodos={setTodos} />
    </div>
    // <div className="App">
    // <header className="App-header">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   <p>
    //     Edit <code>src/App.tsx</code> and save to reload.
    //   </p>
    //   <a
    //     className="App-link"
    //     href="https://reactjs.org"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     Learn React
    //   </a>
    // </header>
    // </div>
  );
}

export default App;
