import { useRef } from "react";

interface AudioProps {
  preview: string | undefined;
  isPlaying: boolean;
  isRepeat: boolean;
}

function Audio({ preview, isPlaying, isRepeat }: AudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (audioRef.current) {
    if (!isRepeat) audioRef.current.loop = false;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  return <audio src={preview} ref={audioRef}></audio>;
}

export default Audio;
