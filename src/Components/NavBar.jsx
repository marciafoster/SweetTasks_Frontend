import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import logo from "../assets/sweetTasks.jpeg";
export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <div className="logo-container">
          <h1 className="title">
            <Link to="/">
              <img
                src={logo}
                alt="Sweet Tasks"
                style={{ width: "180px", height: "180px" }}
              />
            </Link>
          </h1>
        </div>
        <button>
          <Link to="/tasks/new">New Task</Link>
        </button>
      </nav>
    </div>
  );
}
