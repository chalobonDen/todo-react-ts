import React, { useState } from "react";
import { Todo } from "../App";

import { PlusOutlined } from "@ant-design/icons";

import { Input, Button } from "antd";

interface TodoInputProps {
  addTodo: any;
}

export default function TodoInput({ addTodo }: TodoInputProps) {
  const todoObj: Todo = new Todo();

  const [todo, setTodo] = useState(todoObj);

  function submitTodo(event: any) {
    event.preventDefault();
    console.log("todo: ", todo);
    addTodo(todo);
    setTodo(todoObj);
  }

  function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodo({ ...todo, text: event.target.value });
  }

  return (
    <form action="" id="todo-input" onSubmit={submitTodo}>
      {/* <p>What do you want to do?</p> */}

      <Input
        size="large"
        type="text"
        name="todo"
        value={todo.text}
        onChange={handleTodoChange}
        style={{ width: 235, height: 30 }}
        placeholder="What do you want to do?"
      />
      {/* <button type="submit">Add</button> */}

      <Button
        style={{ height: 30 }}
        type="primary"
        htmlType="submit"
        icon={<PlusOutlined />}
      ></Button>
    </form>
  );
}
