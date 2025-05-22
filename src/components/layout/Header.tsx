"use client";

// PUBLIC_INTERFACE
/**
 * Header component for the MultiLocation Inventory Optimizer
 * Contains the application header with logo, navigation and user controls
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/types';

interface HeaderProps {
  user?: User;
  onToggleSidebar: () => void;
}

export default function Header({ user, onToggleSidebar }: HeaderProps) {
  return (
    <header className="bg-[color:var(--bg-component)] border-b border-[color:var(--border-light)] z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Left section - Logo and menu button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center mr-4">
              <Link href="/" className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
                </svg>
                <span className="ml-2 text-base font-semibold text-[color:var(--text-primary)] truncate max-w-[120px]">
                  Inventory
                </span>
              </Link>
            </div>
            
            <button 
              type="button"
              className="p-2 rounded-md text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-canvas)] lg:hidden"
              onClick={onToggleSidebar}
              aria-label="Open sidebar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Right section - Search and user options */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <div className="hidden sm:block relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[color:var(--text-tertiary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                className="pl-9 pr-3 py-1.5 text-sm border border-[color:var(--border-light)] rounded-md bg-[color:var(--bg-component)] text-[color:var(--text-primary)] placeholder-[color:var(--text-tertiary)] focus:outline-none focus:ring-1 focus:ring-[color:var(--primary)] focus:border-[color:var(--primary)]"
                placeholder="Search inventory..."
              />
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-md text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-canvas)] flex items-center justify-center" aria-label="View notifications">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* User menu */}
            <div className="relative">
              <button type="button" className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--primary)] rounded-full" aria-label="User menu">
                <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                  {user?.avatar ? (
                    <Image 
                      src={user.avatar} 
                      alt={`${user.name}'s avatar`} 
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
