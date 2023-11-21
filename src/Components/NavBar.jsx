import { Link } from "react-router-dom"
import "../Styles/NavBar.css";

export default function NavBar() {
    return (
        <div className="navbar">
        <nav>
            <h1>
            <Link to="/">
            <img src="src/assets/Sweet-2.png" alt="Tasks"
            style={{ width: "400px", height: "400px" }} />
          </Link>
            </h1>
            <button>
                <Link to="/tasks/new">New Task</Link>
            </button> 
        </nav>
       </div>
    )
}