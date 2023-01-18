import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import TodoContextProvider from "./store/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
