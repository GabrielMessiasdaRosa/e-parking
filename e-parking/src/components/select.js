import React from "react";
import PropTypes from "prop-types";

export default function Select({
  autofocus,
  disabled,
  form,
  multiple,
  name,
  required,
  value,
  onChange,
  options,
}) {
  const style = {
    width: 150,
    height: 40,
    fontSize: 16,
  };
  return (
    <select
      autoFocus={autofocus}
      disabled={disabled}
      form={form}
      multiple={multiple}
      name={name}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      style={style}
    >
      {options.map((option) => (
        <option selected={option.value === value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
};
Select.defaultProps = {
  autoFocus: false,
  disabled: false,
  form: undefined,
  multiple: false,
  name: undefined,
  required: false,
};
