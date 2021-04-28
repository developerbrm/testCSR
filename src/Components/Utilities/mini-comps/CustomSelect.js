import React from "react";

function CustomSelect({
  options,
  name,
  id,
  value,
  onChange,
  disabled,
  required,
}) {
  return (
    <>
      <select
        name={name}
        disabled={disabled}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
      >
        {options &&
          options.map(({ value, content }, index) => (
            <option key={index} value={value}>
              {content ? content : value}
            </option>
          ))}
      </select>
    </>
  );
}

export default CustomSelect;
