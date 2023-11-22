import { Link } from "react-router-dom"

function Task({ task }) {
    return (
        <Link to={`/tasks/${task.id}`}>
       <div className="task-card">
        <h3>{task.task_name}</h3>
        <p>{task.description}</p>
        <p>{task.assigned_to}</p>
        <p>{task.due_date}</p>
        <p>{task.is_complete}</p>
        <p>{task.priority}</p>
        <p>{task.notes}</p>
        
       </div>
       </Link>
    );
}

export default Task;