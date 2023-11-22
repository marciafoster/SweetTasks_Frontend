import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="Home">
      <h2>Welcome to SweetTasks, your go-to task manager for busy bakers</h2>
      <p>Stay organized, and prioritize tasks with ease.</p>
      <p>
        Get started by adding your first task and let the baking adventure
        begin!
      </p>
      <Link to="/tasks">
        <button>View Tasks</button>
      </Link>
      
    </div>
    
  );
}

export default Home;
