import React from 'react';
import { TfiSearch } from 'react-icons/tfi';

interface SearchProps {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
}

export const Search: React.FC<SearchProps> = ({
  onChange,
  value,
  placeholder,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };
  return (
    <div className="max-w-[1320px] mx-auto">
      <div className="flex items-center border rounded mt-5 mb-6">
        <TfiSearch className="text-gray-500 mx-2" />
        <input
          type="text"
          className="py-2 px-4 rounded-1 focus:outline-none flex-1"
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};
