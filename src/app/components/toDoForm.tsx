'use client';
import { useState } from 'react';

interface toDoFormProps {
    addTask: (task: string) => void;
}

const ToDoForm = ({ addTask }: toDoFormProps) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() === '') return;
    addTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border-2 border-orange-300 rounded w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-green-500/75 shadow-md shadow-green-400/50 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-green-500 text-white rounded w-full">
        Add Task
      </button>
    </form>
  );
};

export default ToDoForm;