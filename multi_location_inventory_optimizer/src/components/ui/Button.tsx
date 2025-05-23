"use client";

// PUBLIC_INTERFACE
/**
 * Button component for the MultiLocation Inventory Optimizer
 * Provides a consistent button styling with variants
 */
import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-[color:var(--primary)] text-white hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'bg-transparent border border-[color:var(--border-light)] text-[color:var(--text-primary)] hover:bg-gray-50 focus:ring-gray-500',
    danger: 'bg-[color:var(--danger)] text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-[color:var(--success)] text-white hover:bg-green-600 focus:ring-green-500',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'py-1 px-2 text-xs',
    md: 'py-1.5 px-3 text-sm',
    lg: 'py-2 px-4 text-base',
  };

  // Loading and disabled styles
  const stateStyles = isLoading || disabled 
    ? 'opacity-70 cursor-not-allowed' 
    : 'cursor-pointer';
  
  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${stateStyles}
        ${widthStyles}
        ${className}
      `}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading</span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          {icon && <span className="mr-1.5">{icon}</span>}
          {children}
        </div>
      )}
    </button>
  );
}
