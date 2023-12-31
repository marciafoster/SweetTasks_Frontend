import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Styles/TaskEditForm.css"

const API = import.meta.env.VITE_API_URL;

function TaskEditForm() {
    let { index } = useParams();
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

    const handleTextChange = (event) => {
        setTask({ ...task, [event.target.id]: event.target.value});
    };

    const handleCheckboxChange = () => {
        setTask({ ...task, is_complete: !task.is_complete});
    };

    const updateTask = () => {
        fetch(`${API}/tasks/${index}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        })
        .then((res) => res.json())
        .then((res) => {
            navigate(`/tasks/${index}`);
        });
    };

    useEffect(() => {
        fetch(`${API}/tasks/${index}`)
        .then((res) => res.json())
        .then((res) => setTask(res));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTask();
    };

    return (
        <div className="Edit">
           <h2>Edit Task</h2>
          <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Task Name:</label>
            <input
              id="name"
              value={task.task_name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of Task"
              required
            />
            </div>
    
            <br />
    
            <div className="input-group">
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              value={task.description}
              type="text"
              onChange={handleTextChange}
              placeholder="Task Description"
              required
            />
            </div>
    
            <br />
    
            <div className="input-group">
            <label htmlFor="assigned_to">Assigned To:</label>
            <input
              id="assigned_to"
              value={task.assigned_to}
              type="varchar"
              onChange={handleTextChange}
              placeholder="Task Assigned To"
              required
            />
            </div>
    
            <br />
    
            <div className="input-group">
            <label htmlFor="due_date">Due Date:</label>
            <input
              id="due_date"
              value={task.due_date}
              type="date"
              onChange={handleTextChange}
              placeholder="Task Due Date"
              required
            />
            </div>
    
            <br />
    
            <div className="input-group">
            <label htmlFor="is_complete">Completed:</label>
            <input
              id="is_complete"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={task.is_complete}
            />
            </div>
    
            <br />
    
            <div className="input-group">
            <label htmlFor="priority">Priority Level:</label>
            <input
              id="priority"
              value={task.priority}
              type="integer"
              onChange={handleTextChange}
              placeholder="Level Of Priority"
              required
            />
            </div>
    
            <br />
    
            <div className="input-group">
            <label htmlFor="notes">Notes:</label>
            <input
              id="notes"
              value={task.notes}
              type="text"
              onChange={handleTextChange}
              placeholder="Important Notes"
              required
            />
              </div>
            <br/>
            <button type="submit">Submit</button>
          </form>
          <br />
          <Link to={`/tasks/${index}`} className="Link-button">
            <button>Back</button>
          </Link>
        </div>
      );
}

export default TaskEditForm;