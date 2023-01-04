import React, { FC } from "react";
import { DeleteTodo, Todo, ToggleComplete } from "../types";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}

export const TodoList: FC<TodoListProps> = ({
  todos,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <ul className="flex flex-col w-full">
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
