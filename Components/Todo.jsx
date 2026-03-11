import React from "react";

const Todo = ({ id, title, description, mongoId, complete, deleteTodo, completeTodo }) => {
  return (
    <tr className="border-b">
      <td className="px-6 py-4">{id + 1}</td>

      <td className="px-6 py-4">{title}</td>

      <td className="px-6 py-4">{description}</td>

      <td className="px-6 py-4">
        {complete ? "Completed" : "Pending"}
      </td>

      <td className="px-6 py-4 flex gap-2">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="bg-red-500 text-white px-3 py-1"
        >
          Delete
        </button>

        <button
          onClick={() => completeTodo(mongoId)}
          className="bg-green-500 text-white px-3 py-1"
        >
          Done
        </button>
      </td>
    </tr>
  );
};

export default Todo; 