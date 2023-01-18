import React, { useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import SingleTodo from "./Todo";
import classes from "./todos.module.css";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <SingleTodo key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default Todos;
