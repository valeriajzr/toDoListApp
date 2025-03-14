  const ToDoItem = ({ task, toggleComplete, removeTask }) => {
    return (
      <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md">
        <span className={task.completed ? "line-through text-gray-400" : "text-gray-800"}>
          {task.text}
        </span>
        <div className="flex gap-2">
          <button 
            onClick={toggleComplete} 
            className="px-2 py-1 text-xs bg-green-500 text-white rounded"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button 
            onClick={removeTask} 
            className="px-2 py-1 text-xs bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default ToDoItem;