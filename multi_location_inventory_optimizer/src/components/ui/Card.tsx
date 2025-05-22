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
    <div className={`bg-[color:var(--bg-component)] rounded-md shadow-sm border border-[color:var(--border-light)] overflow-hidden ${className}`}>
      {(title || subtitle || headerAction) && (
        <div className="px-4 py-3 border-b border-[color:var(--border-light)] sm:px-5">
          <div className="flex items-center justify-between">
            <div>
              {title && <h3 className="text-base leading-6 font-medium text-[color:var(--text-primary)]">{title}</h3>}
              {subtitle && <p className="mt-1 max-w-2xl text-xs text-[color:var(--text-secondary)]">{subtitle}</p>}
            </div>
            {headerAction && (
              <div className="ml-4">
                {headerAction}
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="px-3 py-3 sm:px-4 sm:py-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-4 py-3 border-t border-[color:var(--border-light)] sm:px-5">
          {footer}
        </div>
      )}
    </div>
  );
}
