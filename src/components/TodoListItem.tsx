import React, { FC } from "react";
import { DeleteTodo, Todo, ToggleComplete } from "../types";
import Icon from "@mdi/react";
import { mdiAlphaXCircleOutline } from "@mdi/js";

interface TodoListItemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
  deleteTodo: DeleteTodo;
}

export const TodoListItem: FC<TodoListItemProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <li className="bg-cadetBlue text-white w-full flex items-center justify-between mb-4 rounded-lg">
      <label
        className={`${todo.complete ? "complete line-through" : undefined} m-4`}
      >
        {todo.text}
      </label>
      <div className="h-full grid grid-cols-2">
        <div className="h-full w-full flex justify-center items-center bg-orange">
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleComplete(todo)}
            className="hover:cursor-pointer"
          />
        </div>
        <button
          className="p-4 bg-hanBlue rounded-r-lg"
          onClick={() => deleteTodo(todo)}
        >
          <Icon path={mdiAlphaXCircleOutline} size={1} color="white" />
        </button>
      </div>
    </li>
  );
};
