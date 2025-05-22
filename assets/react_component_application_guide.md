# React Component Application Guide

This document provides practical guidance on applying the design principles to specific React components in the codebase. The examples show how to transform existing components to match the compact, professional design seen in the reference screenshot.

## Applying Design to React Components

### 1. Main Layout Component

#### Before:
```jsx
function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        {children}
      </div>
    </div>
  );
}
```

#### After:
```jsx
function Layout({ children }) {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

// CSS
.app-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background-color: var(--bg-canvas);
}

.main-content {
  padding: var(--space-lg);
  overflow-y: auto;
}
```

### 2. Dashboard Container Component

#### Before:
```jsx
function Dashboard() {
  return (
    <div>
      <h1>Welcome to Inventory Optimizer</h1>
      <p>Monitor your inventory levels and optimize your stock.</p>
      
      <div className="metrics">
        {/* Metrics components */}
      </div>
      
      <div className="data">
        {/* Data components */}
      </div>
    </div>
  );
}
```

#### After:
```jsx
function Dashboard() {
  return (
    <div className="main-container">
      <header className="container-header">
        <h1 className="container-title">Welcome to Inventory Optimizer</h1>
        <p className="container-description">
          Monitor your inventory levels and optimize your stock across multiple locations.
        </p>
      </header>
      
      <section className="metrics-section">
        <MetricsGrid />
      </section>
      
      <section className="data-section">
        <InventoryPanel />
        <CategoriesPanel />
      </section>
    </div>
  );
}

// CSS
.main-container {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-lg);
}

.container-header {
  margin-bottom: var(--space-lg);
}

.container-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.container-description {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.metrics-section {
  margin-bottom: var(--space-lg);
}

.data-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}
```

### 3. Metrics Component

#### Before:
```jsx
function Metrics() {
  return (
    <div className="metrics-container">
      <div className="metric">
        <div className="metric-number">234</div>
        <div className="metric-text">Total Products</div>
      </div>
      <div className="metric">
        <div className="metric-number">195</div>
        <div className="metric-text">In Stock</div>
      </div>
      <div className="metric">
        <div className="metric-number">28</div>
        <div className="metric-text">Low Stock</div>
      </div>
      <div className="metric">
        <div className="metric-number">11</div>
        <div className="metric-text">Out of Stock</div>
      </div>
    </div>
  );
}
```

#### After:
```jsx
function MetricsGrid() {
  const metrics = [
    { title: "Total Products", value: "234", color: "primary" },
    { title: "In Stock", value: "195", color: "success" },
    { title: "Low Stock", value: "28", color: "warning" },
    { title: "Out of Stock", value: "11", color: "danger" }
  ];
  
  return (
    <div className="metrics-grid">
      {metrics.map((metric, index) => (
        <div 
          key={index} 
          className={`metric-card metric-card--${metric.color}`}
        >
          <div className="metric-value">{metric.value}</div>
          <div className="metric-label">{metric.title}</div>
        </div>
      ))}
    </div>
  );
}

// CSS
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
}

.metric-card {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
  border-top: 3px solid transparent;
}

.metric-card--primary { border-top-color: var(--primary); }
.metric-card--success { border-top-color: var(--success); }
.metric-card--warning { border-top-color: var(--warning); }
.metric-card--danger { border-top-color: var(--danger); }

.metric-value {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.metric-label {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }
}
```

### 4. Inventory Panel Component

#### Before:
```jsx
function InventoryData() {
  return (
    <div className="inventory-container">
      <h2>Current Inventory</h2>
      <ul className="inventory-list">
        <li>
          <span>Item One</span>
          <span>145</span>
        </li>
        <li>
          <span>Item Two</span>
          <span>89</span>
        </li>
        <li>
          <span>Item Three</span>
          <span>32</span>
        </li>
      </ul>
    </div>
  );
}
```

#### After:
```jsx
function InventoryPanel() {
  const inventoryItems = [
    { name: "Item One", value: "145" },
    { name: "Item Two", value: "89" },
    { name: "Item Three", value: "32" }
  ];

  return (
    <div className="panel">
      <h2 className="panel-header">Current Inventory</h2>
      <div className="inventory-list">
        {inventoryItems.map((item, index) => (
          <div key={index} className="inventory-item">
            <span className="item-name">{item.name}</span>
            <span className="item-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS
.panel {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
  height: 100%;
}

.panel-header {
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border-light);
}

.inventory-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.inventory-item {
  display: flex;
  justify-content: space-between;
  padding: var(--space-sm) 0;
  border-bottom: 1px solid var(--border-light);
}

.inventory-item:last-child {
  border-bottom: none;
}

.item-name {
  color: var(--text-primary);
}

.item-value {
  font-weight: 500;
  color: var(--text-primary);
}
```

### 5. Categories Panel Component

#### Before:
```jsx
function CategoriesData() {
  return (
    <div className="categories-container">
      <h2>Product Categories</h2>
      <div className="categories">
        <div className="category">
          <div>Category A</div>
          <div className="bar-outer">
            <div className="bar" style={{ width: "45%" }}></div>
          </div>
          <div>45%</div>
        </div>
        <div className="category">
          <div>Category B</div>
          <div className="bar-outer">
            <div className="bar" style={{ width: "30%" }}></div>
          </div>
          <div>30%</div>
        </div>
        <div className="category">
          <div>Category C</div>
          <div className="bar-outer">
            <div className="bar" style={{ width: "25%" }}></div>
          </div>
          <div>25%</div>
        </div>
      </div>
    </div>
  );
}
```

#### After:
```jsx
function CategoriesPanel() {
  const categories = [
    { name: "Category A", percentage: 45, color: "success" },
    { name: "Category B", percentage: 30, color: "primary" },
    { name: "Category C", percentage: 25, color: "warning" }
  ];

  return (
    <div className="panel">
      <h2 className="panel-header">Product Categories</h2>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-header">
              <span className="category-name">{category.name}</span>
              <span className="category-value">{category.percentage}%</span>
            </div>
            <div className="bar-container">
              <div 
                className={`bar bar--${category.color}`}
                style={{ width: `${category.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// CSS
.categories-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.category-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.category-header {
  display: flex;
  justify-content: space-between;
}

.category-name {
  color: var(--text-primary);
}

.category-value {
  color: var(--text-secondary);
  font-weight: 500;
}

.bar-container {
  height: 8px;
  background-color: var(--bg-canvas);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.bar {
  height: 100%;
  border-radius: var(--radius-sm);
}

.bar--primary { background-color: var(--primary); }
.bar--success { background-color: var(--success); }
.bar--warning { background-color: var(--warning); }
```

### 6. Sidebar Navigation Component

#### Before:
```jsx
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Inventory App</div>
      <ul className="nav">
        <li className="active">Dashboard</li>
        <li>Inventory</li>
        <li>Orders</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
```

#### After:
```jsx
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            {/* SVG path data for logo */}
          </svg>
        </div>
        <span className="brand-name">Inventory Optimizer</span>
      </div>
      
      <nav className="nav-menu">
        <a href="/dashboard" className="nav-item active">
          <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20">
            {/* SVG path data for dashboard icon */}
          </svg>
          <span>Dashboard</span>
        </a>
        <a href="/inventory" className="nav-item">
          <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20">
            {/* SVG path data for inventory icon */}
          </svg>
          <span>Inventory</span>
        </a>
        <a href="/orders" className="nav-item">
          <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20">
            {/* SVG path data for orders icon */}
          </svg>
          <span>Orders</span>
        </a>
        <a href="/settings" className="nav-item">
          <svg className="nav-icon" width="20" height="20" viewBox="0 0 20 20">
            {/* SVG path data for settings icon */}
          </svg>
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}

// CSS
.sidebar {
  background-color: var(--bg-component);
  height: 100vh;
  border-right: 1px solid var(--border-light);
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  align-items: center;
  padding: var(--space-md);
  border-bottom: 1px solid var(--border-light);
}

.brand-logo {
  color: var(--primary);
  margin-right: var(--space-sm);
}

.brand-name {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-top: var(--space-md);
}

.nav-item {
  display: flex;
  align-items: center;
  padding: var(--space-sm) var(--space-md);
  color: var(--text-secondary);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}

.nav-item:hover {
  background-color: var(--bg-canvas);
}

.nav-item.active {
  color: var(--primary);
  background-color: rgba(59, 130, 246, 0.05);
  border-left: 3px solid var(--primary);
  font-weight: 500;
}

.nav-icon {
  margin-right: var(--space-sm);
}
```

## Applying CSS Variables

To implement the design system consistently, add these CSS variables to your global stylesheet:

```css
:root {
  /* Colors */
  --primary: #3B82F6;
  --success: #22C55E;
  --warning: #F97316;
  --danger: #EF4444;
  --bg-canvas: #F3F4F6;
  --bg-component: #FFFFFF;
  --border-light: #E5E7EB;
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --text-tertiary: #9CA3AF;
  
  /* Typography */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

## Using with CSS Modules

If you're using CSS Modules, structure your components like this:

```jsx
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Inventory Optimizer</h1>
        <p className={styles.description}>
          Monitor your inventory levels and optimize your stock across multiple locations.
        </p>
      </header>
      
      <section className={styles.metricsSection}>
        <MetricsGrid />
      </section>
      
      <section className={styles.dataSection}>
        <InventoryPanel />
        <CategoriesPanel />
      </section>
    </div>
  );
}
```

## Using with Tailwind CSS

If you're using Tailwind CSS, you can extend the theme configuration:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        success: '#22C55E',
        warning: '#F97316',
        danger: '#EF4444',
        'bg-canvas': '#F3F4F6',
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
    },
  },
};
```

Then use Tailwind classes in your components:

```jsx
function Dashboard() {
  return (
    <div className="bg-white rounded-md shadow-sm p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Welcome to Inventory Optimizer
        </h1>
        <p className="text-sm text-gray-600">
          Monitor your inventory levels and optimize your stock across multiple locations.
        </p>
      </header>
      
      <section className="mb-6">
        <MetricsGrid />
      </section>
      
      <section className="grid grid-cols-2 gap-6">
        <InventoryPanel />
        <CategoriesPanel />
      </section>
    </div>
  );
}
```

## Next Steps for Implementation

1. **Set up the design system**
   - Add CSS variables to your global stylesheet
   - Create base component styles that utilize these variables

2. **Refactor components one by one**
   - Start with container components and work down to smaller components
   - Apply consistent styling patterns across components
   - Ensure responsive behavior works correctly

3. **Verify against design specifications**
   - Check spacing, typography, and colors against the reference
   - Ensure components adapt properly to different screen sizes
   - Test interaction states (hover, active, focus)

4. **Polish and refine**
   - Add subtle transitions for interactive elements
   - Ensure consistent shadow and border treatments
   - Check for any alignment or spacing inconsistencies

By following these examples and guidelines, you can successfully transform your components to match the compact, professional design seen in the reference screenshot.
