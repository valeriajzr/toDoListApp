interface toDoItemProps {
    task: string;
    removeTask: () => void;
  }
  
  const ToDoItem = ({ task, removeTask }: toDoItemProps) => {
    return (
      <div className="flex justify-between items-center p-2 border-b">
        <span>{task}</span>
        <button onClick={removeTask} className="text-red-500">
          Remove task
        </button>
      </div>
    );
  };
  
  export default ToDoItem;