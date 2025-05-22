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
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />

        {/* Main content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-5 w-full">
          {/* Page content */}
          <div className="w-full bg-[color:var(--bg-component)] rounded-md shadow-sm p-3 sm:p-4 mb-4">
            {children}
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
