import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <h1 className="title">
          <Link to="/">
            <img
              src="src/assets/sweetTasks.jpeg"
              alt="Sweet Tasks"
              style={{ width: "180px", height: "180px" }}
            />
          </Link>
        </h1>
        <button>
          <Link to="/tasks/new">New Task</Link>
        </button>
      </nav>
    </div>
  );
}
