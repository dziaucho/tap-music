import { fetchSounds, fetchSoundInfo } from "../../redux/async";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Button from "../button/Button";
import { useEffect } from "react";
import { setCurrentPage } from "../../redux/soundsSlice";

interface SearchingFormProps {
  onSubmit: () => void;
  inputValue: string;
  setInputValue: (value: string) => void;
}

function SearchingForm({
  onSubmit,
  inputValue,
  setInputValue,
}: SearchingFormProps) {
  const dispatch: AppDispatch = useDispatch();
  const { soundsId } = useSelector((state: RootState) => state.sounds);

  const handleSubmit = (event: React.FormEvent) => {
    dispatch(setCurrentPage(1));
    event.preventDefault();
    dispatch(fetchSounds({ query: inputValue, page: 1 }));
    onSubmit();
  };

  useEffect(() => {
    dispatch(fetchSoundInfo({ soundsId }));
  }, [soundsId, dispatch]);

  return (
    <form
      className={"main__searching-form flex-row-space-between"}
      onSubmit={handleSubmit}
    >
      <input
        name="searching-form"
        className={"main__searching-form__input"}
        type="text"
        placeholder="type sound name here"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Button className="main__searching-form" type="submit">
        search
      </Button>
    </form>
  );
}

export default SearchingForm;
