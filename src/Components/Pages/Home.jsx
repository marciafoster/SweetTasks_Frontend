import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="Home">
      <h2>Welcome to SweetTasks, your go-to task manager for busy bakers</h2>
      <h3>Stay organized, and prioritize baking tasks with ease.</h3>
      <h3>
        Get started by adding your first task to your task list, using the new task button above. Click view all tasks to view a list of your current tasks. Edit and delete tasks as needed. Let the baking adventure
        begin!
      </h3>
      <Link to="/tasks">
        <button>View All Tasks</button>
      </Link>
      
    </div>
    
  );
}

export default Home;
