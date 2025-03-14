'use client';
import { useState } from 'react';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ToDoForm = ({ addTask }: { addTask: (day:string, taskText: string) => void}) => {
  const [taskText, setTaskText] = useState("");
  const [selectedDay, setSelectedDay] = useState();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(selectedDay, taskText);
    setTaskText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <select
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        className="p-2 border rounded"
        >
          {daysOfWeek.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
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