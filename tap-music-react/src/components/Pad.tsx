import { useRef, useState } from "react";
import Audio from "./Audio";

interface PadProps {
  className: string;
  index: number;
  preview: string;
}

function Pad({ className, index, preview }: PadProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={`${className}__pad${index}`} onClick={handleClick}>
      <Audio preview={preview} isPlaying={isPlaying} audioRef={audioRef} />
      <p></p>
    </div>
  );
}

export default Pad;
