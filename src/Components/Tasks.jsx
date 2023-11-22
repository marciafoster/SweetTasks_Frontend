import { useState, useEffect } from "react";
import Task from "./Task";
import { Link } from "react-router-dom"
import "../Styles/IndexPage.css";
import 'typeface-roboto'

const API = import.meta.env.VITE_API_URL;

function Tasks() {
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(`${API}/Tasks`);
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            return error;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
          <h2 className="task-list-title">Task List</h2>
          {tasks.map(task => (
            <div key={task.id}>
                <Link to={`/tasks/${task.id}`}>
                    <h3>{task.task_name}</h3>
                </Link>
            </div>
          ))}
        </div>
      );
}

export default Tasks;