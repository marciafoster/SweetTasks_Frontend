import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

const API = import.meta.env.VITE_API_URL;

function Tasks() {
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {
        try {
            fetch(`${API}/Tasks`)
            .then(res => res.json())
            .then(res => {
                setTasks(res)
            })
        } catch (error) {
            return error
        }
    }
    //GET all Tasks
    useEffect(() => {
        fetchData
    }, [])

    return (
        <div>
          <h2>Task List</h2>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      );
}

export default Tasks;