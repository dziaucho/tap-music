import { useEffect } from "react";

interface AudioProps {
  preview: string | undefined;
  isPlaying: boolean;
  audioRef: React.RefObject<HTMLAudioElement>;
  onEnded?: () => void;
}

function Audio({ preview, isPlaying, onEnded, audioRef }: AudioProps) {
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isPlaying, audioRef]);

  return <audio src={preview} ref={audioRef} onEnded={onEnded}></audio>;
}

export default Audio;
