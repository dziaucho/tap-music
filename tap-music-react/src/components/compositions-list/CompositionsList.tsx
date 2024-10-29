import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
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
  const { soundsId, soundsNames, soundsPreviews } = useSelector(
    (state: RootState) => state.sounds,
  );

  const soundsAmount = Math.min(soundsId.length, 5);

  return (
    <div className="compositions-list__div flex-column-center">
      {soundsId.length <= 0 ? (
        <p>nothing was found :&#40;</p>
      ) : (
        Array.from({ length: soundsAmount }, (_, index) => (
          <MusicPlayer
            key={soundsId[index]}
            musicName={soundsNames[index]}
            preview={soundsPreviews[index]}
            addMusicToPad={addMusicToPad}
          />
        ))
      )}
      <Pagination inputValue={inputValue} />
    </div>
  );
}

export default CompositionsList;
