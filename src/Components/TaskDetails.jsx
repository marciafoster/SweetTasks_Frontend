import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Task from './Task';

const API = import.meta.env.VITE_API_URL;

function TaskDetails() {
    const [task, setTask] = useState([]);
    let navigate = useNavigate();
    let { index } = useParams();

    const fetchData = async () => {
        try {
            fetch(`${API}/Tasks/${index}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setTask(res);
            });
        } catch (error) {
            return error
        }
    };

    useEffect(() => {
        fetchData();
    }, [index]);

    const handleDelete = () => {
        fetch(`${API}/tasks/${index}`, {
            method: "Delete",
        }).then(() => navigate("/tasks"));
    };

    const confirmDelete = () => {
        if(window.confirm("Are you sure you want to delete this task?")) {
            handleDelete();
        }
    };

    return (
        <div className="Task-details">
            <h1>Task Details</h1>
            <div className="task-details-card">
                <div className="task-details-description">
                    <h3>
                        Task Name: <br />
                        {task.task_name}
                    </h3>
                    <p>
                        Description: <br />
                        {task.description}
                    </p>
                    <p>
                        Assigned To: <br />
                        {task.assigned_to}
                    </p>
                    <p>
                        Due Date: <br />
                        {task.due_date}
                    </p>
                    <p>
                        Completed: <br />
                        {task.is_complete}
                    </p>
                    <p>
                        Priority Level 1 for high, 2 for medium, 3 for low: <br />
                        {task.priority}
                    </p>
                    <p>
                        Notes: <br />
                        {task.notes}
                    </p>
                    
                 </div>
                 <div className="task-details-buttons">
          <Link to={`/tasks`}>
            <button>Back</button>
          </Link>
          <Link to={`/tasks/${index}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={confirmDelete}>Delete</button>
        </div>
            </div>
        </div>
    )
}

export default TaskDetails;