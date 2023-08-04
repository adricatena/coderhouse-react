function Input({ label, value, handleChange }) {
  return (
    <label>
      {label}
      <input value={value} onChange={handleChange} />
    </label>
  );
}

export default Input;
