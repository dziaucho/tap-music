import { useState } from "react";

interface PadProps {
  className: string;
  index: string;
  sound: string;
}

function Pad({ className, index, sound }: PadProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(sound));

  const handleClick = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className={className + "__pad" + index}
      onClick={() => handleClick}
    ></div>
  );
}

export default Pad;
