import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const API = import.meta.env.VITE_API_URL;

function TaskNewForm() {
  
  const navigate = useNavigate();
  const [task, setTask] = useState({
    task_name: "",
    description: "",
    assigned_to: "",
    due_date: "",
    is_complete: false,
    priority: "",
    notes: ""
  });

  const addTask = () => {
    const taskData = {
        task_name: task.task_name,
        description: task.description,
        assigned_to: task.assigned_to,
        due_date: task.due_date,
        is_complete: task.is_complete,
        priority: task.priority,
        notes: task.notes,
    };
    try {
      fetch(`${API}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
      })
        .then(res => res.json())
        .then(() => navigate('/tasks'))
    } catch (error) {
      return error
    }
  };

  const handleTextChange = (event) => {
    setTask({ ...task, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTask({ ...task, is_complete: !task.is_complete });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  return (
    <div className="NewFormContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Task Name:</label>
        <input
          id="name"
          value={task.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Task"
          required
        />

<label htmlFor="description">Description:</label>
            <input
              id="description"
              value={task.description}
              type="text"
              onChange={handleTextChange}
              placeholder="Task Description"
              required
            />
    
            <br />
    
            <label htmlFor="assigned_to">Assigned To:</label>
            <input
              id="assigned_to"
              value={task.assigned_to}
              type="varchar"
              onChange={handleTextChange}
              placeholder="Task Assigned To"
              required
            />
    
            <br />
    
            <label htmlFor="due_date">Due Date:</label>
            <input
              id="due_date"
              value={task.due_date}
              type="date"
              onChange={handleTextChange}
              placeholder="Task Due Date"
              required
            />
    
            <br />
    
            <label htmlFor="is_complete">Completed:</label>
            <input
              id="is_complete"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={task.is_complete}
            />
    
            <br />
    
            <label htmlFor="priority">Priority Level:</label>
            <input
              id="priority"
              value={task.priority}
              type="integer"
              onChange={handleTextChange}
              placeholder="Level Of Priority"
              required
            />
    
            <br />
    
            <label htmlFor="notes">Notes:</label>
            <input
              id="notes"
              value={task.notes}
              type="text"
              onChange={handleTextChange}
              placeholder="Important Notes"
              required
            />
            <br/>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Link to={`/tasks`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default TaskNewForm;
