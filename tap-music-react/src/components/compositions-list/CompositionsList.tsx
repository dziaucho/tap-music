import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

import MusicPlayer from "../music-player/MusicPlayer";
import Pagination from "../pagination/Pagination";

interface CompositionsListProps {
  addMusicToPad: (index: number, preview: string) => void;
  inputValue: string;
}

function CompositionsList({
  addMusicToPad,
  inputValue,
}: CompositionsListProps) {
  const { sounds } = useSelector((state: RootState) => state.sounds);

  const soundsAmount = Math.min(sounds.length, 5);

  return (
    <div className="compositions-list__div flex-column-center">
      {Array.from({ length: soundsAmount }, (_, index) => (
        <MusicPlayer
          key={sounds[index].id}
          musicName={sounds[index].name}
          preview={sounds[index].previews?.["preview-hq-mp3"]}
          addMusicToPad={addMusicToPad}
        />
      ))}
      <Pagination inputValue={inputValue} />
    </div>
  );
}

export default CompositionsList;
