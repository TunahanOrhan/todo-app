import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { AddTodo } from "../types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <div className="flex items-center w-full mb-4">
      <input className="p-2 rounded-l-lg w-3/4 focus:outline-none" type="text" value={newTodo} onChange={handleChange} />
      <button className="py-2 px-4 font-mono text-white rounded-r-lg bg-cornflowerBlue w-1/4" onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};
