import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./index.scss";
import { WheatherCard } from "./components/WheatherCard";
import { VolumeRange } from "./components/VolumeRange";

export function App() {
  const [activeButton, setActiveButton] = useState<State>(null);
  const [volume, setVolume] = useState<number>(0.75);

  const sounds = useRef<IAudio>({
    rain: new Audio("assets/sounds/rain.mp3"),
    snow: new Audio("assets/sounds/winter.mp3"),
    sun: new Audio("assets/sounds/summer.mp3"),
  });

  const handleButtonClick = (buttonId: State) => {
    setActiveButton((prev) => (prev === buttonId ? null : buttonId));
  };
  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    Object.values(sounds.current).forEach(
      (sound) => (sound.volume = newVolume)
    );
  };

  useEffect(() => {
    const body = document.body;
    body.classList.remove("rainy-bg", "winter-bg", "summer-bg");

    Object.values(sounds.current).forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });

    if (activeButton === Wheather.Rain) {
      body.classList.add("rainy-bg");
      sounds.current.rain.play();
    } else if (activeButton === Wheather.Snow) {
      body.classList.add("winter-bg");
      sounds.current.snow.play();
    } else if (activeButton === Wheather.Sun) {
      body.classList.add("summer-bg");
      sounds.current.sun.play();
    }
  }, [activeButton]);

  return (
    <section className="main-container">
      <h1>Звуки природы</h1>
      <article className="buttons-container">
        <WheatherCard
          src={"assets/icons/pause.svg"}
          notPlayingSrc={"assets/icons/cloud-rain.svg"}
          buttonClass={"rain-button"}
          onClick={() => handleButtonClick(Wheather.Rain)}
          isPlaying={activeButton === Wheather.Rain}
        />
        <WheatherCard
          src={"assets/icons/pause.svg"}
          notPlayingSrc={"assets/icons/cloud-snow.svg"}
          buttonClass={"snow-button"}
          onClick={() => handleButtonClick(Wheather.Snow)}
          isPlaying={activeButton === Wheather.Snow}
        />
        <WheatherCard
          src={"assets/icons/pause.svg"}
          notPlayingSrc={"assets/icons/sun.svg"}
          buttonClass={"sun-button"}
          onClick={() => handleButtonClick(Wheather.Sun)}
          isPlaying={activeButton === Wheather.Sun}
        />
      </article>
      <VolumeRange volume={volume} handleVolumeChange={handleVolumeChange} />
    </section>
  );
}

enum Wheather {
  Rain = "rain",
  Snow = "snow",
  Sun = "sun",
}
interface IAudio {
  rain: HTMLAudioElement;
  snow: HTMLAudioElement;
  sun: HTMLAudioElement;
}

type State = Wheather.Rain | Wheather.Snow | Wheather.Sun | null;
