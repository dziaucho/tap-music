import SearchingForm from "./SearchingForm";
import Pad from "./Pad";
import CompositionsList from "./CompositionsList";
import { useState } from "react";

import { RootState } from "../state/store";
import { useSelector } from "react-redux";

function Main() {
  const [isSearching, setSearchingStatus] = useState(false);
  const { loading } = useSelector((state: RootState) => state.sounds);
  const [previews, setPreviews] = useState(
    Array.from({ length: 6 }, (_, index) => ({ [index]: "" }))
  );

  return (
    <main className="main flex-column-space-between">
      <div className="serching-wrapper__div flex-column-center">
        <SearchingForm
          className="main"
          placeholder="type sound name here"
          buttonText="search"
          onSubmit={() => setSearchingStatus(true)}
        />
        {isSearching && !loading && (
          <CompositionsList setPreviews={setPreviews} previews={previews} />
        )}
      </div>

      <div className="main__pads">
        {Array.from({ length: 6 }, (_, index) => (
          <Pad
            className="main"
            index={index}
            key={index}
            preview={previews[index][index]}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
