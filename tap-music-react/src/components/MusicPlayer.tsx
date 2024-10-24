import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import Button from "./Button/Button";
import play from "../assets/icons/play.svg";
import pause from "../assets/icons/pause.svg";
import Select from "./Select";
import Audio from "./Audio";

import { RootState } from "../state/store";
import { useSelector } from "react-redux";

interface MusicPlayerProps {
  musicName: string;
  preview: string | undefined;
  isActive: boolean;
  onPlay: (audioElement: HTMLAudioElement | null) => void;
  setPreviews: Dispatch<SetStateAction<{ [x: number]: string }[]>>;
  previews: { [key: number]: string }[];
}

function MusicPlayer({
  musicName,
  preview,
  isActive,
  onPlay,
  setPreviews,
  previews,
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { loading, error } = useSelector((state: RootState) => state.sounds);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      onPlay(audioRef.current);
    }
  };

  useEffect(() => {
    if (loading || error) {
      setIsPlaying(false);
    }
  }, [loading, error]);

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = () => {
    if (+selectedOption.slice(1)) {
      const index = Number(selectedOption.slice(1)) - 1;
      const newPreviews = [...previews];
      newPreviews[index] = {
        ...newPreviews[index],
        [index]: audioRef.current?.src ? audioRef.current?.src : "",
      };
      setPreviews(newPreviews);
    }
  };

  return (
    <div className="music-controls flex-row-space-between">
      <Audio
        preview={preview}
        isPlaying={isPlaying && isActive}
        onEnded={handleAudioEnded}
        audioRef={audioRef}
      />
      <Button className="music-player" onClick={togglePlay}>
        <img src={isPlaying && isActive ? pause : play} alt="play/pause" />
      </Button>
      <p className="music-player__paragraph">{musicName}</p>
      <Select
        options={["#1", "#2", "#3", "#4", "#5", "#6"]}
        selectedOption={selectedOption}
        onChange={handleOptionChange}
      />
      <Button className="music-player__add" onClick={handleClick}>
        add
      </Button>
    </div>
  );
}

export default MusicPlayer;
