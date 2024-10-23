import { Dispatch, SetStateAction, useState, useRef } from "react";

import MusicPlayer from "./MusicPlayer";
import Pagination from "./Pagination";

import { useSelector } from "react-redux";
import store, { RootState } from "../state/store";

interface CompositionsListProps {
  setPreviews: Dispatch<SetStateAction<{ [x: number]: string }[]>>;
  previews: { [key: number]: string }[];
  inputValue: string;
}

function CompositionsList({
  setPreviews,
  previews,
  inputValue,
}: CompositionsListProps) {
  const { sounds } = useSelector((state: RootState) => state.sounds);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activePlayer, setActivePlayer] = useState<number | null>(null);

  const numberOfSoundsToShow = Math.min(sounds.length, 5);

  const handlePlay = (audioElement: HTMLAudioElement | null, index: number) => {
    if (audioRef.current && audioRef.current !== audioElement) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    audioRef.current = audioElement;
    setActivePlayer(index);
  };

  return (
    <div className="compositions-list__div flex-column-center">
      {Array.from({ length: numberOfSoundsToShow }, (_, index) => (
        <MusicPlayer
          key={sounds[index].id}
          musicName={sounds[index].name}
          preview={sounds[index].previews?.["preview-hq-mp3"]}
          isActive={activePlayer === index}
          onPlay={(audioElement) => handlePlay(audioElement, index)}
          setPreviews={setPreviews}
          previews={previews}
        />
      ))}
      <Pagination
        itemsPerPage={5}
        totalItems={store.getState().sounds.totalPages}
        inputValue={inputValue}
      />
    </div>
  );
}

export default CompositionsList;
