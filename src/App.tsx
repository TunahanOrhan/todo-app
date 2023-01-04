import React, { FC, useState } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";
import { AddTodo, Todo, ToggleComplete, DeleteTodo } from "./types";
import "./App.css"

const App: FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const toggleComplete: ToggleComplete = (selectedTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const deleteTodo: DeleteTodo = (selectedTodo) => {
    const updateTodos = [...todos].filter((todo) => todo !== selectedTodo);
    setTodos(updateTodos);
  };

  return (
    <div className="main-container min-h-screen flex justify-center items-center">
      <div className="bg-indigo p-10 w-3/4 lg:w-3/5 max-w-3/4 h-[70vh] flex flex-col items-center overflow-scroll rounded-lg shadow-xl">
        <AddTodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
