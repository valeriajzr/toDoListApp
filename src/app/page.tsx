'use client';
import { useState, useEffect } from 'react';
import ToDoForm from './components/toDoForm';
import ToDoItem from './components/toDoItem';

const Home = () => {
  //status of the tasks organized by day
  const [tasks, setTasks] = useState<Record<string, { id: number; text: string; completed: boolean }[]>>({});

  //function to get tasks from local storage
  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks);
      const validTasks = Object.fromEntries(
        Object.entries(parsedTasks).map(([day, tasks]) => [
          day,
          Array.isArray(tasks) ? tasks : []
        ])
      );
      setTasks(validTasks);
    }
  };

  //function to save taks in local storage
  const saveTasks = (updatedTasks: Record<string, { id: number; text: string; completed: boolean }[]>) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  //to call loadTasks
  useEffect(() => {
    loadTasks();
  }, []);


  //function to add a task in a sepecific day
  const addTask = (day: string, taskText: string) => {
    const updatedTasks = {
      ...tasks,
      [day]: [...(tasks)[day] || [], {id: Date.now(), text: taskText, completed: false}]
    };
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  //function to delete a task from a specific day
  const removeTask = (day: string, taskId: number) => {
    const updatedTasks = {
      ...tasks,
      [day]: tasks[day].filter((task) => task.id !== taskId)
    };
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  //function to mark a task as done or not done
  const toggleComplete = (day: string, taskId: number) => {
    const updatedTasks = {
      ...tasks,
      [day] : tasks[day].map((task) => 
        task.id === taskId  ? {...task, completed: !task.completed } : task
      )
    };
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4">
      <h1 className="font-mulish text-4xl font-bold text-center text-cyan-700 mb-4">To-Do List</h1>

      <ToDoForm addTask={addTask} />
      
      <br></br>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.entries(tasks).map(([day, dayTasks]) => (
          <div key={day}>
            <h2 className="text-2x1 font-bold text-gray-700">{day}</h2>
            {(Array.isArray(dayTasks) ? dayTasks : []).map((task) => (
              <ToDoItem 
                key={task.id} 
                task={task} 
                toggleComplete={() => toggleComplete(day, task.id)} 
                removeTask={() => removeTask(day, task.id)} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;