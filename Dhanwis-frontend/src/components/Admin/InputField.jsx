import React from 'react';

function InputField({ label, type = 'text', id, name, value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      {label && <label htmlFor={id} className="block mb-1 font-medium">{label}</label>}
      <input
        id={id}
        name={name} // ✅ IMPORTANT: Add name here
        type={type}
        value={type !== 'file' ? value : undefined} // Don't bind value for file inputs
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b-2 border-gray-500 focus:outline-none focus:border-b-yellow-600"
      />
    </div>
  );
}

export default InputField;
