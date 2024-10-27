import { useState } from "react";

interface SelectProps {
  changePadIndex: (index: number) => void;
}

function Select({ changePadIndex }: SelectProps) {
  const options = ["#1", "#2", "#3", "#4", "#5", "#6"];
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    const index = parseInt(event.target.value.replace("#", "")) - 1;
    changePadIndex(index);
  };

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="" disabled>
        select
      </option>

      {options.map((option, index) => (
        <option value={option} key={index}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
