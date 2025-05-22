"use client";

// PUBLIC_INTERFACE
/**
 * DashboardContent component for the MultiLocation Inventory Optimizer
 * Displays the main dashboard content with overview and analytics
 */
import React from 'react';
import InventorySummary from './InventorySummary';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { InventorySummary as InventorySummaryType } from '@/types';

// Mock data for inventory summary
const mockSummaryData: InventorySummaryType = {
  totalProducts: 245,
  totalLocations: 5,
  lowStockItems: 12,
  overStockItems: 8,
  pendingTransfers: 3,
};

// Mock data for recent activities
const recentActivities = [
  {
    id: '1',
    type: 'transfer_initiated',
    description: 'Transfer of 25 units of "Premium Notebook" from Warehouse A to Store C',
    timestamp: '2 hours ago',
    status: 'pending',
  },
  {
    id: '2',
    type: 'inventory_update',
    description: 'Store B reported 5 units of "Wireless Mouse" as damaged',
    timestamp: '5 hours ago',
    status: 'completed',
  },
  {
    id: '3',
    type: 'low_stock_alert',
    description: 'Low stock alert for "USB-C Cable" at Store A (3 units remaining)',
    timestamp: '1 day ago',
    status: 'alert',
  },
  {
    id: '4',
    type: 'transfer_completed',
    description: 'Transfer of 50 units of "Desk Lamp" from Warehouse B to Store D completed',
    timestamp: '1 day ago',
    status: 'completed',
  },
];

// Mock data for inventory distribution
const inventoryDistribution = [
  { location: 'Warehouse A', percentage: 45, color: 'bg-blue-500' },
  { location: 'Store B', percentage: 25, color: 'bg-green-500' },
  { location: 'Store C', percentage: 15, color: 'bg-yellow-500' },
  { location: 'Warehouse B', percentage: 10, color: 'bg-purple-500' },
  { location: 'Store A', percentage: 5, color: 'bg-red-500' },
];

// Status badge mapping
const statusBadge = {
  pending: { text: 'Pending', variant: 'warning' },
  completed: { text: 'Completed', variant: 'success' },
  alert: { text: 'Alert', variant: 'danger' },
};

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Welcome section */}
      <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Inventory Optimizer</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300">
          Manage and optimize your inventory across all locations from one central dashboard.
        </p>
      </div>

      {/* Inventory Summary */}
      <InventorySummary data={mockSummaryData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card title="Recent Activities">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="py-3 flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-900 dark:text-white">{activity.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.timestamp}</p>
                  </div>
                  <Badge 
                    variant={statusBadge[activity.status as keyof typeof statusBadge].variant as 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'}
                    size="sm"
                  >
                    {statusBadge[activity.status as keyof typeof statusBadge].text}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" fullWidth>
                View All Activities
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Inventory Distribution */}
        <div>
          <Card title="Inventory Distribution">
            <div className="space-y-4">
              {inventoryDistribution.map((item) => (
                <div key={item.location} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.location}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className={`${item.color} h-2.5 rounded-full`} 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" fullWidth>
                View Detailed Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Button variant="primary" fullWidth>
            Add Product
          </Button>
          <Button variant="secondary" fullWidth>
            Create Transfer
          </Button>
          <Button variant="outline" fullWidth>
            Update Stock
          </Button>
          <Button variant="outline" fullWidth>
            Generate Report
          </Button>
        </div>
      </Card>
    </div>
  );
}
