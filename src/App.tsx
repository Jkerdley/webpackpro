import React from "react";
import "./index.scss";
import { WheatherCard } from "./components/WheatherCard";
export function App() {
    return (
        <section>
            <h1>Звуки природы</h1>
            <WheatherCard />
        </section>
    );
}
