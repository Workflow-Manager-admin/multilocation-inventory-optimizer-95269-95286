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
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-[color:var(--text-primary)]">Welcome to Inventory Optimizer</h1>
        <p className="mt-1 text-sm text-[color:var(--text-secondary)]">
          Manage and optimize your inventory across all locations from one central dashboard.
        </p>
      </div>

      {/* Inventory Summary */}
      <InventorySummary data={mockSummaryData} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Recent Activity */}
        <div className="md:col-span-2">
          <Card title="Recent Activities">
            <div className="divide-y divide-[color:var(--border-light)]">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="py-2 flex items-start justify-between gap-2">
                  <div className="flex-grow pr-2">
                    <p className="text-xs sm:text-sm text-[color:var(--text-primary)]">{activity.description}</p>
                    <p className="text-xs text-[color:var(--text-tertiary)] mt-0.5">{activity.timestamp}</p>
                  </div>
                  <div className="flex-shrink-0 pt-0.5">
                    <Badge 
                      variant={statusBadge[activity.status as keyof typeof statusBadge].variant as 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'}
                      size="sm"
                    >
                      {statusBadge[activity.status as keyof typeof statusBadge].text}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" fullWidth>
                View All Activities
              </Button>
            </div>
          </Card>
        </div>
        
        {/* Inventory Distribution */}
        <div>
          <Card title="Inventory Distribution">
            <div className="space-y-3">
              {inventoryDistribution.map((item) => (
                <div key={item.location} className="flex flex-col">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-medium text-[color:var(--text-primary)]">{item.location}</span>
                    <span className="text-xs font-medium text-[color:var(--text-secondary)]">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-[color:var(--bg-canvas)] rounded-full h-2">
                    <div 
                      className={`${item.color} h-2 rounded-full`} 
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" fullWidth>
                View Detailed Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Quick Actions */}
      <Card title="Quick Actions">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Button variant="primary" size="sm" fullWidth>
            Add Product
          </Button>
          <Button variant="secondary" size="sm" fullWidth>
            Create Transfer
          </Button>
          <Button variant="outline" size="sm" fullWidth>
            Update Stock
          </Button>
          <Button variant="outline" size="sm" fullWidth>
            Generate Report
          </Button>
        </div>
      </Card>
    </div>
  );
}
