import React, { useState } from "react";
import { TfiSearch } from "react-icons/tfi";

export default function SearchInput({ onChange }) {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center justify-center space-x-3">
      <input
        className="border w-full h-12 rounded-lg text-red-500 px-3"
        type="text"
        placeholder="Add a word"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        disabled={!value}
        onClick={() => onChange(value)}
        className="bg-red-500 text-white text-3xl rounded-lg h-full flex items-center justify-center px-3 py-2 disabled:bg-red-400"
      >
        <TfiSearch />
      </button>
    </div>
  );
}
