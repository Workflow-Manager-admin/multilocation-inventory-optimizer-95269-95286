"use client";

// PUBLIC_INTERFACE
/**
 * Sidebar component for the MultiLocation Inventory Optimizer
 * Contains navigation links for different sections of the application
 */
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  
  // Navigation items
  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: 'dashboard',
      path: '/',
    },
    {
      id: 'inventory',
      title: 'Inventory',
      icon: 'inventory',
      path: '/inventory',
    },
    {
      id: 'locations',
      title: 'Locations',
      icon: 'location',
      path: '/locations',
    },
    {
      id: 'products',
      title: 'Products',
      icon: 'products',
      path: '/products',
    },
    {
      id: 'transfers',
      title: 'Transfers',
      icon: 'transfer',
      path: '/transfers',
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: 'reports',
      path: '/reports',
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: 'settings',
      path: '/settings',
    },
  ];

  // Function to render icon based on name
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'dashboard':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'inventory':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
          </svg>
        );
      case 'location':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'products':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'transfer':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      case 'reports':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      case 'settings':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        );
    }
  };

  // Check if a path is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-gray-900/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-30 h-full w-60 bg-[color:var(--bg-component)] border-r border-[color:var(--border-light)]
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:sticky lg:top-0 lg:z-0 overflow-y-auto
        `}
      >
        {/* Sidebar header */}
        <div className="h-14 flex items-center px-4 border-b border-[color:var(--border-light)]">
          <Link href="/" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
            </svg>
            <span className="text-lg font-semibold text-[color:var(--text-primary)]">Inventory</span>
          </Link>

          <button
            className="lg:hidden ml-auto p-2 rounded-md text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-canvas)] focus:outline-none"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-4 px-2 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className={`
                flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out
                ${isActive(item.path) 
                  ? 'text-[color:var(--primary)] bg-blue-50 dark:bg-blue-900/10 border-l-[3px] border-[color:var(--primary)]' 
                  : 'text-[color:var(--text-secondary)] hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[color:var(--text-primary)]'}
              `}
            >
              <div className={`mr-3 ${isActive(item.path) ? 'text-[color:var(--primary)]' : 'text-[color:var(--text-secondary)]'}`}>
                {renderIcon(item.icon || '')}
              </div>
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Sidebar footer */}
        <div className="absolute bottom-0 w-full p-4 border-t border-[color:var(--border-light)] bg-[color:var(--bg-component)]">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="text-sm font-medium text-[color:var(--text-primary)]">
              User Name
              <p className="text-xs text-[color:var(--text-secondary)]">Administrator</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
