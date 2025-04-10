import React, { useEffect, useState } from "react";
import "./index.scss";
import { WheatherCard } from "./components/WheatherCard";
export function App() {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (buttonId: string) => {
        setActiveButton((prev) => (prev === buttonId ? null : buttonId));
    };
    console.log("activeButton", activeButton);

    useEffect(() => {
        const body = document.body;
        body.classList.remove("rainy-bg", "winter-bg", "summer-bg");
        if (activeButton === "first") {
            body.classList.add("rainy-bg");
        } else if (activeButton === "second") {
            body.classList.add("winter-bg");
        } else if (activeButton === "third") {
            body.classList.add("summer-bg");
        }
    }, [activeButton]);
    return (
        <section className="main-container">
            <h1>Звуки природы</h1>
            <article className="buttons-container">
                <WheatherCard
                    src={"pause.svg"}
                    notPlayingSrc={"cloud-rain.svg"}
                    buttonClass={"first-button"}
                    onClick={() => handleButtonClick("first")}
                    isPlaying={activeButton === "first"}
                />
                <WheatherCard
                    src={"pause.svg"}
                    notPlayingSrc={"cloud-snow.svg"}
                    buttonClass={"second-button"}
                    onClick={() => handleButtonClick("second")}
                    isPlaying={activeButton === "second"}
                />
                <WheatherCard
                    src={"pause.svg"}
                    notPlayingSrc={"sun.svg"}
                    buttonClass={"third-button"}
                    onClick={() => handleButtonClick("third")}
                    isPlaying={activeButton === "third"}
                />
            </article>
        </section>
    );
}
