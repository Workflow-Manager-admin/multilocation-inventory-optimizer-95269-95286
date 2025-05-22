"use client";

// PUBLIC_INTERFACE
/**
 * Card component for the MultiLocation Inventory Optimizer
 * Used to display content in a card format
 */
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  className?: string;
  headerAction?: React.ReactNode;
}

export default function Card({
  children,
  title,
  subtitle,
  footer,
  className = '',
  headerAction,
}: CardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden ${className}`}>
      {(title || subtitle || headerAction) && (
        <div className="px-4 py-5 border-b border-gray-200 dark:border-gray-700 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              {title && <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{title}</h3>}
              {subtitle && <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}
            </div>
            {headerAction && (
              <div className="ml-4">
                {headerAction}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
      
      {footer && (
        <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 sm:px-6">
          {footer}
        </div>
      )}
    </div>
  );
}
