import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/tasks">Tasks</Link>
            </h1>
            <button>
                <Link to="/tasks/new">New Task</Link>
            </button>
        </nav>
    )
}