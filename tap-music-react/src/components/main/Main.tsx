import { useState } from "react";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import SearchingForm from "../searching-form/SearchingForm";
import Pad from "../pad/Pad";
import CompositionsList from "../compositions-list/CompositionsList";

function Main() {
  const [isSearching, setSearchingStatus] = useState(false);
  const { loading } = useSelector((state: RootState) => state.sounds);
  const [inputValue, setInputValue] = useState("");
  const [previews, setPreviews] = useState(
    Array.from({ length: 6 }, (_) => ""),
  );

  const addMusicToPad = (index: number, preview: string) => {
    const newPreviews = [...previews];
    newPreviews[index] = preview;
    setPreviews(newPreviews);
  };

  return (
    <main className="main flex-column-space-between">
      <div className="serching-wrapper__div flex-column-center">
        <SearchingForm
          onSubmit={() => setSearchingStatus(true)}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        {isSearching && !loading && (
          <CompositionsList
            addMusicToPad={addMusicToPad}
            inputValue={inputValue}
          />
        )}
      </div>

      <div className="main__pads">
        {Array.from({ length: 6 }, (_, index) => (
          <Pad
            className="main"
            index={index}
            key={index}
            preview={previews[index]}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
