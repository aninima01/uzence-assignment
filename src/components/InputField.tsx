import React, { useState } from "react";
import clsx from "clsx";
import { Eye, EyeOff, X } from "lucide-react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: string;
  clearable?: boolean;
  passwordToggle?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onClear,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  passwordToggle = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputId = label ? label.toLowerCase().replace(/\s+/g, "-") : "input";
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  const baseStyles =
    "w-full rounded-md focus:outline-none focus:ring-2 transition disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantStyles = {
    filled: "bg-gray-100 focus:ring-blue-500",
    outlined: "border border-gray-300 focus:ring-blue-500",
    ghost: "bg-transparent border-b border-gray-300 focus:ring-blue-500",
  };

  const invalidStyles = invalid ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          id={inputId}
          type={passwordToggle && !showPassword ? "password" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          aria-describedby={invalid ? errorId : helperId}
          className={clsx(
            baseStyles,
            sizeStyles[size],
            variantStyles[variant],
            invalidStyles
          )}
        />

        {clearable && value && !disabled && (
          <button
            type="button"
            aria-label="Clear input"
            className="absolute right-8 text-gray-500 hover:text-gray-700"
            onClick={() =>
              onClear
                ? onClear()
                : onChange?.({} as React.ChangeEvent<HTMLInputElement>)
            }
          >
            <X size={16} />
          </button>
        )}

        {passwordToggle && (
          <button
            type="button"
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {invalid && errorMessage ? (
        <p id={errorId} className="text-sm text-red-600">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p id={helperId} className="text-sm text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
