import { useState } from "react";
import { RootState } from "../../state/store";
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

  const { loading, error } = useSelector((state: RootState) => state.sounds);
  if (loading || error) {
    setIsPlaying(false);
  }

  const handleClick = () => {
    if (preview && padIndex !== null) addMusicToPad(padIndex, preview);
  };

  return (
    <div className="music-controls flex-row-space-between">
      <Audio preview={preview} isPlaying={isPlaying} isRepeat={false} />
      <Button className="music-player" onClick={() => setIsPlaying(!isPlaying)}>
        <img src={isPlaying ? pause : play} alt="play / pause" />
      </Button>
      <p className="music-player__paragraph">{musicName}</p>
      <Select changePadIndex={changePadIndex} />
      <Button className="music-player__add" onClick={handleClick}>
        add
      </Button>
    </div>
  );
}

export default MusicPlayer;
