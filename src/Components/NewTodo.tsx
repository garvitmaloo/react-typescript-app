import { useRef, useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import classes from "./new-todo.module.css";

const NewTodo: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);

  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    todoCtx.addTodo(enteredText);
    todoTextRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input required type="text" id="text" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
