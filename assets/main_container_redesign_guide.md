# Main Container Redesign Guide

This document provides specific guidance for redesigning the main container and its subcomponents to achieve a compact, professional appearance as shown in the reference screenshot.

## Understanding the Requirements

The request specifies redesigning the main container to be:
1. **Compact** - Efficient use of space without excessive padding or margins
2. **Professional** - Clean, consistent styling with proper alignment and visual hierarchy

## Main Container Structure

The main container should follow this basic structure:

```jsx
<div className="main-container">
  <header className="container-header">
    <h1 className="container-title">Welcome to Inventory Optimizer</h1>
    <p className="container-description">Monitor your inventory levels and optimize your stock across multiple locations.</p>
  </header>
  
  <section className="metrics-section">
    {/* Metrics cards */}
  </section>
  
  <section className="data-section">
    {/* Data panels */}
  </section>
</div>
```

## Key Design Properties for Professional Appearance

### 1. Container Styling

```css
.main-container {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
}
```

Key properties:
- Clean white background
- Subtle rounded corners (8px)
- Light shadow effect for depth
- Consistent padding (24px)

### 2. Typography for Professional Appearance

```css
.container-title {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
  line-height: 1.2;
}

.container-description {
  font-size: 14px;
  color: #6B7280;
  margin-bottom: 24px;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 16px;
}
```

Key properties:
- Clear hierarchy with appropriate font sizes
- Professional font weights (bold for titles, regular for descriptions)
- Proper text colors (dark gray for titles, medium gray for descriptions)
- Consistent line heights and margins

### 3. Compact Metrics Section

```css
.metrics-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.metric-card {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-top: 3px solid transparent;
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 4px;
}

.metric-label {
  font-size: 14px;
  color: #6B7280;
}
```

Key properties:
- Grid layout for equal sizing and spacing
- Compact but readable padding (16px)
- Clear visual hierarchy within cards
- Color coding through top borders

### 4. Data Panels for Compact Information Display

```css
.data-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.data-panel {
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;
  height: 100%;
}

.panel-header {
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E5E7EB;
}
```

Key properties:
- Two-column layout for efficient space use
- Consistent styling with other components
- Clear visual separation through headers
- Equal heights for balanced appearance

## Implementation Steps for Redesign

1. **Define CSS Variables**
   
   Start by setting up CSS variables to ensure consistency across all components:

   ```css
   :root {
     /* Colors */
     --primary: #3B82F6;
     --success: #22C55E;
     --warning: #F97316;
     --danger: #EF4444;
     --bg-component: #FFFFFF;
     --text-primary: #111827;
     --text-secondary: #6B7280;
     --border-light: #E5E7EB;
     
     /* Spacing */
     --space-xs: 4px;
     --space-sm: 8px;
     --space-md: 16px;
     --space-lg: 24px;
     
     /* Shadows */
     --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
     
     /* Border Radius */
     --radius-md: 8px;
   }
   ```

2. **Create Base Container Component**

   ```jsx
   function MainContainer({ children, title, description }) {
     return (
       <div className="main-container">
         <header className="container-header">
           <h1 className="container-title">{title}</h1>
           {description && (
             <p className="container-description">{description}</p>
           )}
         </header>
         {children}
       </div>
     );
   }
   ```

3. **Define Metrics Component**

   ```jsx
   function MetricsSection() {
     const metrics = [
       { title: "Total Products", value: "234", color: "primary" },
       { title: "In Stock", value: "195", color: "success" },
       { title: "Low Stock", value: "28", color: "warning" },
       { title: "Out of Stock", value: "11", color: "danger" }
     ];
     
     return (
       <section className="metrics-section">
         {metrics.map((metric, index) => (
           <div key={index} className={`metric-card metric-card--${metric.color}`}>
             <div className="metric-value">{metric.value}</div>
             <div className="metric-label">{metric.label}</div>
           </div>
         ))}
       </section>
     );
   }
   ```

4. **Define Data Panels Component**

   ```jsx
   function DataSection() {
     return (
       <section className="data-section">
         <div className="data-panel">
           <h2 className="panel-header">Current Inventory</h2>
           <InventoryList />
         </div>
         <div className="data-panel">
           <h2 className="panel-header">Product Categories</h2>
           <CategoryChart />
         </div>
       </section>
     );
   }
   ```

5. **Put It All Together**

   ```jsx
   function Dashboard() {
     return (
       <MainContainer
         title="Welcome to Inventory Optimizer"
         description="Monitor your inventory levels and optimize your stock across multiple locations."
       >
         <MetricsSection />
         <DataSection />
       </MainContainer>
     );
   }
   ```

## Specific Techniques for Achieving a Compact, Professional Design

### 1. Efficient Use of Space

- Use appropriate padding: 24px for container, 16px for internal components
- Utilize grid layouts for even distribution of space
- Keep related elements properly grouped
- Avoid excessive whitespace between components
- Ensure information density is appropriate without feeling crowded

### 2. Visual Consistency

- Apply the same border-radius (8px) to all container elements
- Use consistent shadow effects for depth
- Maintain uniform padding within similar components
- Align text and other elements consistently
- Keep color usage disciplined and purposeful

### 3. Professional Polish

- Use subtle separators between sections (light borders)
- Apply color purposefully to indicate status or importance
- Ensure perfect alignment of elements
- Use typography to create clear visual hierarchy
- Add subtle hover effects for interactive elements

## Example: Complete CSS for Professional Main Container

```css
/* Main Container */
.main-container {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-lg);
  width: 100%;
}

/* Container Header */
.container-header {
  margin-bottom: var(--space-lg);
}

.container-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
  line-height: 1.2;
}

.container-description {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

/* Metrics Section */
.metrics-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-md);
  margin-bottom: var(--space-lg);
}

.metric-card {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-md);
  border-top: 3px solid transparent;
}

.metric-card--primary {
  border-top-color: var(--primary);
}

.metric-card--success {
  border-top-color: var(--success);
}

.metric-card--warning {
  border-top-color: var(--warning);
}

.metric-card--danger {
  border-top-color: var(--danger);
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-xs);
}

.metric-label {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0;
}

/* Data Section */
.data-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
}

.data-panel {
  background-color: var(--bg-component);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  padding: var(--space-md);
  height: 100%;
}

.panel-header {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-primary);
  margin-top: 0;
  margin-bottom: var(--space-md);
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border-light);
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .metrics-section {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .metrics-section {
    grid-template-columns: 1fr;
  }
  
  .data-section {
    grid-template-columns: 1fr;
  }
  
  .main-container {
    padding: var(--space-md);
  }
}
```

## Final Checklist for Professional Main Container

- [ ] Container has appropriate size and responsive behavior
- [ ] Clean white background with subtle shadow for depth
- [ ] Consistent border radius on all components (8px)
- [ ] Typography follows a clear hierarchy
- [ ] Spacing is efficient but not cramped
- [ ] Color is used purposefully and consistently
- [ ] Components align properly and have consistent styling
- [ ] Layout responds appropriately to different screen sizes
- [ ] Visual hierarchy guides the user's attention effectively
- [ ] Information is displayed in a clear, organized manner

By implementing these design specifications, the main container and its subcomponents will achieve the compact, professional appearance shown in the reference screenshot.
