// PUBLIC_INTERFACE
/**
 * InventorySummary component for the MultiLocation Inventory Optimizer
 * Displays summary of inventory statistics and key metrics
 */
import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { InventorySummary as InventorySummaryType } from '@/types';

interface InventorySummaryProps {
  data: InventorySummaryType;
}

export default function InventorySummary({ data }: InventorySummaryProps) {
  // For demo purposes, using placeholder data if not provided
  const summaryData = data || {
    totalProducts: 245,
    totalLocations: 5,
    lowStockItems: 12,
    overStockItems: 8,
    pendingTransfers: 3,
  };

  // Summary cards data
  const summaryCards = [
    {
      id: 'total-products',
      title: 'Total Products',
      value: summaryData.totalProducts,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h10v10" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'total-locations',
      title: 'Locations',
      value: summaryData.totalLocations,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'low-stock',
      title: 'Low Stock Items',
      value: summaryData.lowStockItems,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      badge: { text: 'Needs Attention', variant: 'warning' },
    },
    {
      id: 'over-stock',
      title: 'Over Stock Items',
      value: summaryData.overStockItems,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'pending-transfers',
      title: 'Pending Transfers',
      value: summaryData.pendingTransfers,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      badge: { text: 'Action Required', variant: 'danger' },
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Inventory Overview</h2>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {summaryCards.map((card) => (
          <Card key={card.id} className="border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800">
                {card.icon}
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.title}</p>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">{card.value}</p>
              </div>
            </div>
            
            {card.badge && (
              <div className="mt-3">
                <Badge variant={card.badge.variant as any} size="sm">
                  {card.badge.text}
                </Badge>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
