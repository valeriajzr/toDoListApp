  const ToDoItem = ({ task, toggleComplete, removeTask }) => {
    return (
      <div className="flex items-center h-11 justify-between bg-blue-100 p-3 rounded-lg shadow-md mb-1">
        <span className={task.completed ? "line-through text-gray-400" : "text-gray-800"}>
          {task.text}
        </span>
        <div className="flex gap-2">
          <button 
            onClick={toggleComplete} 
            className="px-2 h-8 py-1 text-[14px] bg-green-500 text-white rounded"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button 
            onClick={removeTask} 
            className="px-2 h-8 py-1 text-[14px] bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
  };
  
  export default ToDoItem;