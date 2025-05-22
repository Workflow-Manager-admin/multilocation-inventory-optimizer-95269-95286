# CSS Implementation Examples

This document provides practical CSS code examples for implementing the redesigned main container and its subcomponents according to the design specifications identified in the screenshot.

## Base CSS Variables

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
  --radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

## Layout Structure

### Main App Layout

```css
.app-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
  background-color: var(--bg-canvas);
}

.main-content {
  padding: var(--space-lg);
  max-width: 1440px;
  width: 100%;
}

@media (max-width: 768px) {
  .app-container {
    grid-template-columns: 1fr;
  }
}
```

### Main Container

```css
.main-container {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-lg);
  margin-bottom: var(--space-lg);
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
```

## Navigation Sidebar

```css
.sidebar {
  background-color: var(--bg-component);
  height: 100vh;
  border-right: 1px solid var(--border-light);
  position: sticky;
  top: 0;
}

.sidebar-header {
  padding: var(--space-md);
  border-bottom: 1px solid var(--border-light);
  display: flex;
  align-items: center;
}

.sidebar-logo {
  width: 32px;
  height: 32px;
  margin-right: var(--space-sm);
}

.sidebar-title {
  font-size: var(--text-lg);
  font-weight: 600;
}

.sidebar-nav {
  padding: var(--space-md) 0;
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
  width: 20px;
  height: 20px;
  margin-right: var(--space-sm);
}
```

## Metrics Cards Grid

```css
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.metric-card {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  padding: var(--space-md);
  box-shadow: var(--shadow-sm);
}

.metric-card--primary {
  border-top: 3px solid var(--primary);
}

.metric-card--success {
  border-top: 3px solid var(--success);
}

.metric-card--warning {
  border-top: 3px solid var(--warning);
}

.metric-card--danger {
  border-top: 3px solid var(--danger);
}

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

## Data Panels Layout

```css
.panels-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  margin-bottom: var(--space-lg);
}

.panel {
  background-color: var(--bg-component);
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

@media (max-width: 768px) {
  .panels-grid {
    grid-template-columns: 1fr;
  }
}
```

## Current Inventory Panel

```css
.inventory-list {
  display: flex;
  flex-direction: column;
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

## Product Categories Panel

```css
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
  margin-bottom: var(--space-xs);
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
  transition: width 0.3s ease;
}

.bar--green {
  background-color: var(--success);
}

.bar--blue {
  background-color: var(--primary);
}

.bar--orange {
  background-color: var(--warning);
}
```

## Form Elements

```css
.form-group {
  margin-bottom: var(--space-md);
}

.form-label {
  display: block;
  margin-bottom: var(--space-xs);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
}

.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  font-size: var(--text-base);
  color: var(--text-primary);
  background-color: var(--bg-component);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
```

## Buttons

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}

.btn-primary {
  background-color: var(--primary);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #2563eb; /* Darker blue */
}

.btn-secondary {
  background-color: white;
  color: var(--text-primary);
  border: 1px solid var(--border-light);
}

.btn-secondary:hover {
  background-color: var(--bg-canvas);
}

.btn-success {
  background-color: var(--success);
  color: white;
  border: none;
}

.btn-success:hover {
  background-color: #16a34a; /* Darker green */
}

.btn-danger {
  background-color: var(--danger);
  color: white;
  border: none;
}

.btn-danger:hover {
  background-color: #dc2626; /* Darker red */
}

.btn-icon {
  margin-right: var(--space-xs);
}

.btn-sm {
  padding: 6px 12px;
  font-size: var(--text-xs);
}

.btn-lg {
  padding: 10px 20px;
  font-size: var(--text-base);
}
```

## Complete Example: Dashboard Layout

```css
/* Global styles */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--text-primary);
  background-color: var(--bg-canvas);
  line-height: 1.5;
  margin: 0;
  padding: 0;
}

/* App layout */
.app-container {
  display: grid;
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}

/* Main content */
.main-content {
  padding: var(--space-lg);
  overflow-y: auto;
}

/* Dashboard header */
.dashboard-header {
  margin-bottom: var(--space-lg);
}

/* Metrics grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

/* Data panels */
.panels-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .app-container {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
  
  .sidebar.mobile-visible {
    display: block;
    position: fixed;
    z-index: 100;
    width: 240px;
    height: 100vh;
  }
  
  .panels-grid {
    grid-template-columns: 1fr;
  }
}
```

These CSS examples provide concrete implementations of the design elements identified in the screenshot analysis. They follow modern CSS best practices including CSS variables, responsive design principles, and clean component styling. Adapt these examples as needed to match your specific implementation details and framework requirements.
