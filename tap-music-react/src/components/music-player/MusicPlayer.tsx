import { useEffect, useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Button from "../button/Button";
import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg";
import Select from "../select/Select";
import Audio from "../audio/Audio";

interface MusicPlayerProps {
  musicName: string;
  preview: string | undefined;
  addMusicToPad: (index: number, preview: string) => void;
}

function MusicPlayer({ musicName, preview, addMusicToPad }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [padIndex, changePadIndex] = useState<number | null>(null);

  const { isLoading, error } = useSelector((state: RootState) => state.sounds);

  useEffect(() => {
    if (isLoading || error) {
      setIsPlaying(false);
    }
  }, [isLoading, error]);

  const handleClick = () => {
    if (preview && padIndex !== null) {
      addMusicToPad(padIndex, preview);
    }
  };

  return (
    <div className="music-controls flex-row-space-between">
      <Audio preview={preview} isPlaying={isPlaying} isRepeat={false} />
      <Button
        className="music-player__controls"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <img src={isPlaying ? pause : play} alt="play / pause" />
      </Button>
      <p className="music-player__paragraph">{musicName}</p>
      <Select changePadIndex={changePadIndex} />
      <Button className="music-player__add" onClick={handleClick}>
        add
      </Button>
      {error && <p className="error-message">Ошибка: {error}</p>}
    </div>
  );
}

export default MusicPlayer;
