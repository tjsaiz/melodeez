import {useState} from "react";
import logo from "../../../resources/Tlogo.png";

export default function Home() {
    const [count, setCount] = useState(0)


    return (
        <>
        <img className='logo' src={logo} alt="logo"/>
        <h1>Home</h1>
        <div className="card">
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        </>
    )
}