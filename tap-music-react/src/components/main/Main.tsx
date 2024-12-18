import { useState } from "react";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import SearchForm from "../search-form/SearchForm";
import Pad from "../pad/Pad";
import CompositionsList from "../compositions-list/CompositionsList";

function Main() {
  const [isSearching, setSearchingStatus] = useState(false);
  const { isLoading } = useSelector((state: RootState) => state.sounds);
  const [inputValue, setInputValue] = useState("");
  const [previews, setPreviews] = useState(
    Array.from({ length: 6 }, (_) => "")
  );

  const addMusicToPad = (index: number, preview: string) => {
    const newPreviews = [...previews];
    newPreviews[index] = preview;
    setPreviews(newPreviews);
  };

  return (
    <main className="main flex-column-space-between">
      <SearchForm
        onSubmit={() => setSearchingStatus(true)}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      {isSearching && !isLoading && (
        <CompositionsList
          addMusicToPad={addMusicToPad}
          inputValue={inputValue}
        />
      )}

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
