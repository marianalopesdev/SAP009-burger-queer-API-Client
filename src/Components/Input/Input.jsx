import'./Input.css';

export function Input({type, value, onChange, placeholder}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className= "inputs"
    />
  );
}
