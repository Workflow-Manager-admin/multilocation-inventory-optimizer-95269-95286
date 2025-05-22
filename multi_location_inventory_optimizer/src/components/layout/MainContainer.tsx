"use client";

// PUBLIC_INTERFACE
/**
 * MainContainer component for the MultiLocation Inventory Optimizer
 * This is the primary container that integrates the header, sidebar, and content area
 * and provides the overall layout structure for the application.
 */
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface MainContainerProps {
  /**
   * The main content to display in the container
   */
  children: React.ReactNode;
  /**
   * Optional title for the page
   */
  pageTitle?: string;
  /**
   * Optional user data for personalization
   */
  userData?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

/**
 * MainContainer serves as the primary layout wrapper for the MultiLocation Inventory Optimizer.
 * It handles the responsive layout with sidebar navigation, header, and footer.
 */
export default function MainContainer({ children }: MainContainerProps) {
  // State to track sidebar visibility on mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Close sidebar (for mobile navigation)
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[color:var(--bg-canvas)]">
      {/* Header */}
      <Header onToggleSidebar={toggleSidebar} />

      {/* Main content area with sidebar */}
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main content */}
        <main className="flex-1 sm:p-6 lg:p-8 max-w-[1440px] w-full mx-auto">
          {/* Page title area */}
          {/* {pageTitle && (
            <div className="mb-4 sm:mb-6">
              <h1 className="text-xl sm:text-2xl font-bold text-[color:var(--text-primary)]">{pageTitle}</h1>
            </div>
          )} */}
          
          {/* Page content */}
          <div className="w-full bg-[color:var(--bg-component)] rounded-md shadow-sm p-4 sm:p-6 mb-6">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
