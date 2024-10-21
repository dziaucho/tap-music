interface SelectProps {
  options: string[];
  selectedOption: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Уточнённый тип
}

function Select({ options, selectedOption, onChange }: SelectProps) {
  return (
    <select value={selectedOption} onChange={onChange}>
      <option value="" disabled>
        select
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
