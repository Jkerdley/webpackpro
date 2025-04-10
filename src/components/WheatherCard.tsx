import React, { useState } from "react";
import "../index.scss";
export const WheatherCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <button className="first-button" onClick={() => setIsPlaying((prev) => !prev)}>
            {isPlaying ? <img src="pause.svg"></img> : <img src="cloud-rain.svg"></img>}
        </button>
    );
};
