function SelectInput({ options, value, onChange, name, placeholder }) {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white text-black py-2 rounded-xl border border-black placeholder:text-gray-400"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  export default SelectInput