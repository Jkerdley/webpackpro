import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { WheatherCard } from "./components/WheatherCard";

export function App() {
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const sounds = useRef({
        first: new Audio("assets/sounds/rain.mp3"),
        second: new Audio("assets/sounds/winter.mp3"),
        third: new Audio("assets/sounds/summer.mp3"),
    });

    const handleButtonClick = (buttonId: string) => {
        setActiveButton((prev) => (prev === buttonId ? null : buttonId));
    };

    useEffect(() => {
        const body = document.body;
        body.classList.remove("rainy-bg", "winter-bg", "summer-bg");

        Object.values(sounds.current).forEach((sound) => {
            sound.pause();
            sound.currentTime = 0;
        });

        if (activeButton === "first") {
            body.classList.add("rainy-bg");
            sounds.current.first.play();
        } else if (activeButton === "second") {
            body.classList.add("winter-bg");
            sounds.current.second.play();
        } else if (activeButton === "third") {
            body.classList.add("summer-bg");
            sounds.current.third.play();
        }
    }, [activeButton]);

    return (
        <section className="main-container">
            <h1>Звуки природы</h1>
            <article className="buttons-container">
                <WheatherCard
                    src={"assets/icons/pause.svg"}
                    notPlayingSrc={"assets/icons/cloud-rain.svg"}
                    buttonClass={"first-button"}
                    onClick={() => handleButtonClick("first")}
                    isPlaying={activeButton === "first"}
                />
                <WheatherCard
                    src={"assets/icons/pause.svg"}
                    notPlayingSrc={"assets/icons/cloud-snow.svg"}
                    buttonClass={"second-button"}
                    onClick={() => handleButtonClick("second")}
                    isPlaying={activeButton === "second"}
                />
                <WheatherCard
                    src={"assets/icons/pause.svg"}
                    notPlayingSrc={"assets/icons/sun.svg"}
                    buttonClass={"third-button"}
                    onClick={() => handleButtonClick("third")}
                    isPlaying={activeButton === "third"}
                />
            </article>
        </section>
    );
}
