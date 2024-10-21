import { useState } from "react";
import { fetchSounds } from "../slices/soundSlice";
import { AppDispatch } from "../state/store";
import { useDispatch } from "react-redux";

interface SearchingFormProps {
  className: string;
  placeholder: string;
  buttonText: string;
  onSubmit: () => void;
}

function SearchingForm({
  className,
  placeholder,
  buttonText,
  onSubmit,
}: SearchingFormProps) {
  const [inputValue, setInputValue] = useState("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(fetchSounds(inputValue));
    onSubmit();
    setInputValue("");
  };

  return (
    <form
      className={`${className}__searching-form flex-row-space-between`}
      onSubmit={handleSubmit}
    >
      <input
        name="searching-form"
        className={`${className}__searching-form__input`}
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className={`${className}__searching-form__button`} type="submit">
        {buttonText}
      </button>
    </form>
  );
}

export default SearchingForm;
