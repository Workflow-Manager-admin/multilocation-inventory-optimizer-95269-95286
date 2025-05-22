/**
 * Types for the MultiLocation Inventory Optimizer
 */

// Location type
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  contactPerson?: string;
  contactEmail?: string;
  contactPhone?: string;
}

// Product category
export interface Category {
  id: string;
  name: string;
  description?: string;
}

// Product type
export interface Product {
  id: string;
  name: string;
  sku: string;
  description?: string;
  categoryId: string;
  unitCost: number;
  sellingPrice: number;
  imageUrl?: string;
}

// Inventory item 
export interface InventoryItem {
  id: string;
  productId: string;
  locationId: string;
  quantity: number;
  minThreshold: number;
  maxThreshold: number;
  lastRestocked?: Date;
  lastUpdated: Date;
}

// Transfer type
export interface Transfer {
  id: string;
  productId: string;
  fromLocationId: string;
  toLocationId: string;
  quantity: number;
  status: 'pending' | 'in-transit' | 'completed' | 'cancelled';
  initiatedDate: Date;
  completedDate?: Date;
}

// User type
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager' | 'staff';
  avatar?: string;
}

// Navigation item for sidebar
export interface NavItem {
  id: string;
  title: string;
  icon?: string;
  path: string;
  children?: NavItem[];
}

// Inventory summary stats
export interface InventorySummary {
  totalProducts: number;
  totalLocations: number;
  lowStockItems: number;
  overStockItems: number;
  pendingTransfers: number;
}
