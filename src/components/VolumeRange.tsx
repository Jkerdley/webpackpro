import React, { ChangeEvent, FC } from "react";

export const VolumeRange: FC<VolumeRangeProps> = ({
  volume,
  handleVolumeChange,
}) => {
  return (
    <article className="volume-control">
      <label htmlFor="volume">Громкость</label>
      <input
        name="volume"
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        onChange={handleVolumeChange}
      />
    </article>
  );
};

interface VolumeRangeProps {
  volume: number;
  handleVolumeChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
