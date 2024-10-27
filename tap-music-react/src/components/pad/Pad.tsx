import { useState } from "react";
import Audio from "../audio/Audio";

interface PadProps {
  className: string;
  index: number;
  preview: string;
}

function Pad({ className, index, preview }: PadProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className={`${className}__pad${index}`} onClick={handleClick}>
      <Audio preview={preview} isPlaying={isPlaying} isRepeat={true} />
      <p></p>
    </div>
  );
}

export default Pad;
