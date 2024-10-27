import { fetchSounds } from "../../slices/soundSlice";
import { AppDispatch } from "../../state/store";
import { useDispatch } from "react-redux";
import Button from "../button/Button";

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(fetchSounds(inputValue));
    onSubmit();
  };

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
