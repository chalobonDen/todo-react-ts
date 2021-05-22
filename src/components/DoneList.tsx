import React from "react";
import { Todo } from "../App";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface DoneListProps {
  todos: Todo[];
  setTodos: any;
}

export default function DoneList({ todos, setTodos }: DoneListProps) {
  const todosDone = todos.filter((todo: Todo) => {
    return todo.isDone;
  });

  // toggle checkbox
  function updateCheckedItem(todo: Todo) {
    todo.isDone = !todo.isDone;
    todos[todo.id] = todo;

    setTodos([...todos]);
  }

  const removeTodo = (todoId: any) => {
    const updateTodos = todos.filter((todo: Todo) => todo.id !== todoId);

    return setTodos(updateTodos);
    console.log(todos);
  };

  return (
    <div id="todo-list">
      <h2>Done</h2>
      <ul>
        {todosDone.map((todo: Todo) => {
          return (
            <li key={todo.id} style={{ listStyle: "none" }}>
              <Checkbox
                defaultChecked={todo.isDone}
                onChange={(e) => {
                  updateCheckedItem(todo);
                }}
              />{" "}
              &nbsp;
              <span
                style={{ textDecoration: "line-through", listStyle: "none" }}
              >
                {todo.text}
              </span>
              &nbsp;
              <Button
                style={{ border: "none", color: "#FF6666" }}
                icon={<DeleteOutlined />}
                onClick={() => removeTodo(todo.id)}
              ></Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
