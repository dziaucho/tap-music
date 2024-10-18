interface SearchingFormProps {
  className: string;
  placeholder: string;
  buttonText: string;
}

function SearchingForm({
  className,
  placeholder,
  buttonText,
}: SearchingFormProps) {
  return (
    <form className={className + "__searching-form"}>
      <input
        className={className + "__searching-form__input"}
        type="text"
        placeholder={placeholder}
      />
      <button className={className + "__searching-form__button"} type="submit">
        {buttonText}
      </button>
    </form>
  );
}

export default SearchingForm;
