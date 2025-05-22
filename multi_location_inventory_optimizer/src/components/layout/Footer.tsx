"use client";

// PUBLIC_INTERFACE
/**
 * Footer component for the MultiLocation Inventory Optimizer
 * Contains the footer with copyright information and links
 */
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[color:var(--bg-component)] border-t border-[color:var(--border-light)]">
      <div className="w-full mx-auto py-3 px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-wrap justify-center md:order-2 space-x-4">
          <Link 
            href="/help"
            className="text-xs text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
          >
            Help
          </Link>
          <Link 
            href="/privacy"
            className="text-xs text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
          >
            Privacy
          </Link>
          <Link 
            href="/terms"
            className="text-xs text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
          >
            Terms
          </Link>
          <Link 
            href="/contact"
            className="text-xs text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="mt-2 md:mt-0 md:order-1">
          <p className="text-center text-xs text-[color:var(--text-secondary)]">
            &copy; {currentYear} MultiLocation Inventory Optimizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
