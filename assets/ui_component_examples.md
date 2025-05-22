# UI Component Examples

This document provides specific code examples for implementing key components of the redesigned dashboard interface. These examples are based on React and CSS/Tailwind, but the concepts can be adapted to other frameworks.

## Layout Structure Example

### App Container with Sidebar and Main Content

```jsx
function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

// CSS
.app-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background-color: var(--bg-canvas);
}

.main-content {
  padding: var(--space-lg);
  overflow-y: auto;
}

// Tailwind equivalent
<div className="grid grid-cols-[240px_1fr] min-h-screen bg-gray-50">
  <Sidebar />
  <main className="p-6 overflow-y-auto">
    {children}
  </main>
</div>
```

## Sidebar Navigation Example

```jsx
function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <Logo />
        <span className="brand-name">Inventory Optimizer</span>
      </div>
      
      <nav className="nav-menu">
        <a href="/dashboard" className="nav-item active">
          <DashboardIcon />
          <span>Dashboard</span>
        </a>
        <a href="/inventory" className="nav-item">
          <InventoryIcon />
          <span>Inventory</span>
        </a>
        <a href="/orders" className="nav-item">
          <OrdersIcon />
          <span>Orders</span>
        </a>
        <a href="/analytics" className="nav-item">
          <AnalyticsIcon />
          <span>Analytics</span>
        </a>
        <a href="/settings" className="nav-item">
          <SettingsIcon />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}

// CSS
.sidebar {
  background-color: white;
  height: 100vh;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.brand {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--border-light);
}

.brand-name {
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 16px;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  color: var(--text-secondary);
  text-decoration: none;
  transition: background-color 0.2s;
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

.nav-item svg {
  width: 20px;
  height: 20px;
  margin-right: 12px;
}

// Tailwind equivalent
<aside className="bg-white h-screen shadow-sm flex flex-col">
  <div className="flex items-center p-4 border-b border-gray-100">
    <Logo />
    <span className="text-lg font-semibold ml-2">Inventory Optimizer</span>
  </div>
  
  <nav className="flex flex-col gap-1 mt-4">
    <a href="/dashboard" className="flex items-center px-4 py-2 text-blue-500 bg-blue-50 border-l-3 border-blue-500 font-medium">
      <DashboardIcon className="w-5 h-5 mr-3" />
      <span>Dashboard</span>
    </a>
    <a href="/inventory" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50">
      <InventoryIcon className="w-5 h-5 mr-3" />
      <span>Inventory</span>
    </a>
    {/* Other nav items */}
  </nav>
</aside>
```

## Dashboard Header Example

```jsx
function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <div>
        <h1 className="page-title">Welcome to Inventory Optimizer</h1>
        <p className="page-subtitle">
          Monitor your inventory levels and optimize your stock across multiple locations.
        </p>
      </div>
    </header>
  );
}

// CSS
.dashboard-header {
  padding-bottom: var(--space-md);
}

.page-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.page-subtitle {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

// Tailwind equivalent
<header className="pb-4">
  <h1 className="text-2xl font-bold text-gray-900 mb-1">
    Welcome to Inventory Optimizer
  </h1>
  <p className="text-sm text-gray-600">
    Monitor your inventory levels and optimize your stock across multiple locations.
  </p>
</header>
```

## Metrics Cards Section Example

```jsx
function MetricsSection() {
  const metrics = [
    { title: "Total Products", value: "234", color: "blue" },
    { title: "In Stock", value: "195", color: "green" },
    { title: "Low Stock", value: "28", color: "orange" },
    { title: "Out of Stock", value: "11", color: "red" }
  ];

  return (
    <div className="metrics-container">
      {metrics.map((metric, index) => (
        <MetricCard 
          key={index}
          title={metric.title}
          value={metric.value}
          color={metric.color}
        />
      ))}
    </div>
  );
}

function MetricCard({ title, value, color }) {
  const colorClasses = {
    blue: "border-blue-500",
    green: "border-green-500",
    orange: "border-orange-500",
    red: "border-red-500"
  };

  return (
    <div className={`metric-card ${colorClasses[color]}`}>
      <div className="metric-value">{value}</div>
      <div className="metric-title">{title}</div>
    </div>
  );
}

// CSS
.metrics-container {
  display: flex;
  gap: var(--space-md);
  margin: var(--space-lg) 0;
}

.metric-card {
  flex: 1;
  background-color: white;
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
  border-top: 3px solid transparent;
  min-width: 160px;
}

.metric-value {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.metric-title {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

// Tailwind equivalent
<div className="flex gap-4 my-6">
  <div className="flex-1 bg-white rounded-lg p-4 shadow border-t-3 border-blue-500">
    <div className="text-xl font-bold text-gray-900 mb-1">234</div>
    <div className="text-sm text-gray-600">Total Products</div>
  </div>
  {/* Other cards */}
</div>
```

## Data Panels Example

```jsx
function DataPanels() {
  return (
    <div className="data-container">
      <InventoryPanel />
      <CategoriesPanel />
    </div>
  );
}

function InventoryPanel() {
  const inventoryItems = [
    { name: "Item 1", value: "124" },
    { name: "Item 2", value: "86" },
    { name: "Item 3", value: "24" }
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

function CategoriesPanel() {
  const categories = [
    { name: "Category A", percentage: 45, color: "bg-green-500" },
    { name: "Category B", percentage: 30, color: "bg-blue-500" },
    { name: "Category C", percentage: 25, color: "bg-orange-500" }
  ];

  return (
    <div className="panel">
      <h2 className="panel-header">Product Categories</h2>
      <div className="categories-chart">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-info">
              <span className="category-name">{category.name}</span>
              <span className="category-percentage">{category.percentage}%</span>
            </div>
            <div className="bar-container">
              <div 
                className={`bar ${category.color}`}
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
.data-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  margin-top: var(--space-lg);
}

.panel {
  background-color: white;
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
}

.panel-header {
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border-light);
}

/* Inventory Panel */
.inventory-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.inventory-item {
  display: flex;
  justify-content: space-between;
  padding: var(--space-sm) 0;
}

.item-name {
  color: var(--text-primary);
}

.item-value {
  font-weight: 500;
}

/* Categories Panel */
.categories-chart {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.category-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.category-info {
  display: flex;
  justify-content: space-between;
}

.category-name {
  color: var(--text-primary);
}

.category-percentage {
  color: var(--text-secondary);
  font-weight: 500;
}

.bar-container {
  height: 8px;
  background-color: var(--bg-canvas);
  border-radius: 4px;
  overflow: hidden;
}

.bar {
  height: 100%;
  border-radius: 4px;
}

// Tailwind equivalent
<div className="grid grid-cols-2 gap-6 mt-6">
  <div className="bg-white rounded-lg p-4 shadow">
    <h2 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">
      Current Inventory
    </h2>
    <div className="flex flex-col gap-2">
      {inventoryItems.map((item, index) => (
        <div key={index} className="flex justify-between py-2">
          <span className="text-gray-900">{item.name}</span>
          <span className="font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
  
  <div className="bg-white rounded-lg p-4 shadow">
    <h2 className="text-lg font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">
      Product Categories
    </h2>
    <div className="flex flex-col gap-4">
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-gray-900">{category.name}</span>
            <span className="text-gray-600 font-medium">{category.percentage}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded overflow-hidden">
            <div 
              className={category.color}
              style={{ width: `${category.percentage}%`, height: '100%' }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
```

## Complete Dashboard Example

```jsx
function Dashboard() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <DashboardHeader />
        <MetricsSection />
        <DataPanels />
      </main>
    </div>
  );
}
```

## Responsive Behavior Implementation

```jsx
// Mobile navigation toggle example
function MobileHeader() {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <>
      <header className="mobile-header">
        <button 
          className="menu-toggle"
          onClick={() => setNavOpen(true)}
        >
          <MenuIcon />
        </button>
        <h1 className="mobile-title">Inventory Optimizer</h1>
      </header>
      
      {navOpen && (
        <>
          <div className="overlay" onClick={() => setNavOpen(false)}></div>
          <aside className="mobile-sidebar">
            <div className="mobile-sidebar-header">
              <h2>Inventory Optimizer</h2>
              <button onClick={() => setNavOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <nav className="nav-menu">
              {/* Navigation items */}
            </nav>
          </aside>
        </>
      )}
    </>
  );
}

// CSS
.mobile-header {
  display: none;
  align-items: center;
  padding: var(--space-md);
  background-color: white;
  box-shadow: var(--shadow-sm);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  margin-right: var(--space-sm);
}

.mobile-title {
  font-size: var(--text-lg);
  font-weight: 600;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
}

.mobile-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background-color: white;
  z-index: 50;
  box-shadow: var(--shadow-md);
  animation: slide-in 0.3s ease;
}

.mobile-sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md);
  border-bottom: 1px solid var(--border-light);
}

@keyframes slide-in {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

@media (max-width: 768px) {
  .app-layout {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
  
  .mobile-header {
    display: flex;
  }
  
  .metrics-container {
    flex-direction: column;
  }
  
  .data-container {
    grid-template-columns: 1fr;
  }
}

// Tailwind equivalent
<div className="md:hidden flex items-center p-4 bg-white shadow">
  <button 
    className="mr-2 focus:outline-none" 
    onClick={() => setNavOpen(true)}
  >
    <MenuIcon className="w-6 h-6" />
  </button>
  <h1 className="text-lg font-semibold">Inventory Optimizer</h1>
</div>

{navOpen && (
  <>
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={() => setNavOpen(false)}
    ></div>
    <aside className="fixed top-0 left-0 bottom-0 w-70 bg-white z-50 shadow-lg animate-slide-in">
      {/* Mobile sidebar content */}
    </aside>
  </>
)}
```

## CSS Variables Setup Example

This is a complete example of setting up CSS variables that match the design:

```css
:root {
  /* Color Palette */
  --primary: #3B82F6;
  --success: #22C55E;
  --warning: #F97316;
  --danger: #EF4444;
  
  /* Background Colors */
  --bg-canvas: #F3F4F6;
  --bg-component: #FFFFFF;
  --bg-hover: #F9FAFB;
  --bg-active: rgba(59, 130, 246, 0.05);
  
  /* Text Colors */
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --text-tertiary: #9CA3AF;
  --text-on-primary: #FFFFFF;
  
  /* Border Colors */
  --border-light: #E5E7EB;
  --border-focus: #3B82F6;
  
  /* Typography */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  
  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Layout */
  --sidebar-width: 240px;
  --header-height: 64px;
}
```

These examples provide concrete implementations of the design elements identified in the screenshot, with both standard CSS and Tailwind CSS alternatives where applicable.
