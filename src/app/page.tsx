'use client';
import { useState, useEffect } from 'react';
import ToDoForm from './components/toDoForm';
import ToDoItem from './components/toDoItem';

const Home = () => {
  //status of the tasks
  const [tasks, setTasks] = useState<string[]>([]);

  //function to get tasks from local storage
  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  //function to save taks in local storage
  const saveTasks = (updatedTasks: string[]) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  //to call loadTasks
  useEffect(() => {
    loadTasks();
  }, []);


  //function to add a task
  const addTask = (task: string) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    saveTasks(updatedTasks); // save in localStorage
  };

  //function to delete a task
  const removeTask = (taskToRemove: string) => {
    const updatedTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
    saveTasks(updatedTasks); // save in localStorage
  };

  return (
    <div className="min-h-screen bg-yellow-50 p-4">
      <h1 className="font-mulish text-4xl font-bold text-center text-gray-500 mb-4">To-Do List</h1>

      <ToDoForm addTask={addTask} />
      
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tasks.map((task, index) => (
          <ToDoItem key={index} task={task} removeTask={() => removeTask(task)} />
        ))}
      </div>
    </div>
  );
};
export default Home;