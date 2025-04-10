import React, { useState } from "react";

export const WheatherCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <button onClick={() => setIsPlaying((prev) => !prev)}>
            {isPlaying ? (
                <img src="../public/assets/icons/pause.svg"></img>
            ) : (
                <img src="../public/assets/icons/cloud-rain.svg"></img>
            )}
        </button>
    );
};
