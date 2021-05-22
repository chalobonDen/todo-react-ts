import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../App";
import { List, Typography, Divider } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import { EditOutlined } from "@ant-design/icons";

interface InputComponentProps {
  todo: Todo;
  onCheck: Function;
  updateTodo: Function;
}

function InputComponent({ todo, onCheck, updateTodo }: InputComponentProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState({
    id: "",
    text: "",
    isDone: false,
  });
  const [inputVisible, setInputVisible] = useState(false);

  //OnSave นะจ้ะ
  function onSave(id: string, newText: string) {
    // const editedTodoList = todo.map((todo: any) => {
    //   if (id == todo.id) {
    //     return { ...todo, text: newText };
    //   }
    //   return todo;
    // });
    console.log(`${id} ${newText}`);

    updateTodo(id, newText);
    setInputVisible(false);
  }

  // click outside
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
  //

  return (
    <div>
      <li key={todo.id} style={{ listStyle: "none" }}>
        <Checkbox
          defaultChecked={todo.isDone}
          onChange={(e) => {
            onCheck(todo);
          }}
        />
        &nbsp;
        {inputVisible ? (
          <div style={{ display: "inline" }}>
            <Input
              // ref={inputRef}
              style={{ width: 160, height: 30 }}
              defaultValue={todo.text}
              onChange={(e) => {
                const value = e.target!.value;
                setText({
                  id: todo.id,
                  text: value,
                  isDone: false,
                });
              }}
            />
            <Button
              onClick={(e) => {
                onSave(text.id, text.text);
              }}
            >
              save
            </Button>
          </div>
        ) : (
          <span>
            {todo.text}
            &nbsp;
            <Button
              style={{ border: "none" }}
              onClick={() => setInputVisible(true)}
              icon={<EditOutlined />}
            ></Button>
          </span>
        )}
      </li>
    </div>
  );
}

export default InputComponent;
