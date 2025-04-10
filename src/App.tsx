import React, { useState } from "react";
import "./index.scss";
export function App() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Hello Webpack</h1>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>
        </>
    );
}
