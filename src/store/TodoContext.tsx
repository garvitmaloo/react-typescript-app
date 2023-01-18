import React, { useState } from "react";
import Todo from "../Models/todo";

interface TodoValueObject {
  items: Todo[];
  addTodo: (item: string) => void;
  removeTodo: (item: Todo) => void;
}

export const TodoContext = React.createContext<TodoValueObject>({
  items: [],
  addTodo: (item: string) => {},
  removeTodo: (item: Todo) => {},
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (item: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todoItem) => todoItem !== item);
    });
  };

  const todoContextValueObj: TodoValueObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={todoContextValueObj}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
