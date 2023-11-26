import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/edit">Edit</Link></li>
                <li><Link to="/share">Share</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </ul>
        </nav>
    )
}

