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
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link 
            href="/help"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Help
          </Link>
          <Link 
            href="/privacy"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Privacy
          </Link>
          <Link 
            href="/terms"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Terms
          </Link>
          <Link 
            href="/contact"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            Contact
          </Link>
        </div>
        <div className="mt-4 md:mt-0 md:order-1">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} MultiLocation Inventory Optimizer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
