import { useState,} from 'react';

interface InputProps {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  onBlur,
  onFocus,
  error, 
  placeholder,
  required = false,
  disabled = false
}: InputProps) => {

  const [isFocused, setIsFocused] = useState(false);

  // Handlers que combinan el estado interno CON los props externos
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);  // ← Llama al onFocus del padre si existe
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);  // ← Llama al onBlur del padre si existe
  };

  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}  // ← UN SOLO onFocus
        onBlur={handleBlur}    // ← UN SOLO onBlur
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-4 py-3 border rounded-card 
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary/50
          ${error 
            ? 'border-red-500 focus:border-red-500' 
            : 'border-gray-300 focus:border-primary'
          }
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
          ${isFocused && !error ? 'shadow-elevation-2' : ''}  // ← ¡USÁ isFocused ACÁ!
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      
      {error && (
        <p 
          id={`${name}-error`} 
          className="mt-2 text-sm text-red-600"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;