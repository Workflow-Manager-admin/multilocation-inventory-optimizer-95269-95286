"use client";

// PUBLIC_INTERFACE
/**
 * Badge component for the MultiLocation Inventory Optimizer
 * Used to display status indicators or counts
 */
import React from 'react';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  rounded?: boolean;
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  rounded = false,
  className = '',
}: BadgeProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center font-medium';
  
  // Variant styles
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-400',
    success: 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-400',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300',
    danger: 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-400',
    info: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-800/30 dark:text-indigo-400',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
    lg: 'px-3 py-1 text-base',
  };
  
  // Border radius styles
  const roundedStyles = rounded ? 'rounded-full' : 'rounded';

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${roundedStyles}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
