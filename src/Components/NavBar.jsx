import { Link } from "react-router-dom"
import "../Styles/NavBar.css";

export default function NavBar() {
    return (
        <div className="navbar">
        <nav>
            <h1>
            <Link to="/">
            <img src="src/assets/sweetTasks.jpeg" alt="Tasks"
            style={{ width: "250px", height: "250px" }} />
          </Link>
            </h1>
            <button>
                <Link to="/tasks">New Task</Link>
            </button> 
        </nav>
       </div>
    )
}