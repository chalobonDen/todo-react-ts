import React, { useState, useRef, useEffect } from "react";
import { List, Typography, Divider } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Todo } from "../App";
import InputComponent from "./InputComponent";

interface TodoListProps {
  todos: Todo[];
  setTodos: any;
  updateTodo: Function;
}

export default function TodoList({
  todos,
  setTodos,
  updateTodo,
}: TodoListProps) {
  const todosInProgress = todos.filter((todo) => {
    return !todo.isDone;
  });

  // toggle checkbox
  function updateCheckedItem(todo: Todo) {
    todo.isDone = !todo.isDone;
    todos[todo.id] = todo;

    setTodos([...todos]);
  }

  // function onSave(e: any, i: any) {
  //   const newTodos = [...todos];
  //   newTodos[i].text = e.target.value;
  //   setTodos(newTodos);
  // }

  // function onClickOutSide(e: any) {
  //   // Check if user is clicking outside of <input>
  //   if (inputRef.current && !inputRef.current.contains(e.target)) {
  //     setInputVisible(false); // Disable text input
  //   }
  // }

  // useEffect(() => {
  //   // Handle outside clicks on mounted state
  //   if (inputVisible) {
  //     document.addEventListener("mousedown", onClickOutSide);
  //   }

  //   // This is a necessary step to "dismount" unnecessary events when we destroy the component
  //   return () => {
  //     document.removeEventListener("mousedown", onClickOutSide);
  //   };
  // });

  return (
    <div id="todo-list">
      <h2>Todo</h2>
      <ul>
        {todosInProgress.map((todo) => {
          console.log("เริ่มต้นนะค่ะ", todo);
          return (
            <InputComponent
              todo={todo}
              onCheck={updateCheckedItem}
              updateTodo={updateTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}
