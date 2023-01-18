import React, { useContext } from "react";
import Todo from "../Models/todo";
import { TodoContext } from "../store/TodoContext";
import classes from "./todo-item.module.css";

const SingleTodo: React.FC<{
  data: Todo;
}> = (props) => {
  const todoCtx = useContext(TodoContext);

  const removeTodoHandler = () => {
    todoCtx.removeTodo(props.data);
  };
  return (
    <li className={classes.item} onClick={removeTodoHandler}>
      {props.data.text}
    </li>
  );
};

export default SingleTodo;
