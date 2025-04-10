import React, { FC, useState } from "react";
import "../index.scss";
interface WheatherCardProps {
    src: string;
    notPlayingSrc: string;
    buttonClass: string;
    onClick: () => void;
    isPlaying: boolean;
}

export const WheatherCard: FC<WheatherCardProps> = ({
    src,
    notPlayingSrc,
    buttonClass,
    onClick,
    isPlaying,
}) => {
    return (
        <button className={buttonClass} onClick={onClick}>
            {isPlaying ? (
                <img src={src} alt="playing wheather"></img>
            ) : (
                <img src={notPlayingSrc} alt="paused"></img>
            )}
        </button>
    );
};
