import {useState} from "react";

export default function Share() {
    const [count, setCount] = useState(0)


    return (
        <>
        <h1>Share</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        </>
    )
}