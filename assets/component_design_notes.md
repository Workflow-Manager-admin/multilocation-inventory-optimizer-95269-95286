# Component-Specific Design Notes

This document provides detailed specifications for the individual components identified in the Inventory Optimizer dashboard interface.

## Navigation Sidebar

### Specifications
- **Width**: Fixed at 240px
- **Background**: White (#FFFFFF)
- **Shadow**: Subtle right-side shadow (0 0 10px rgba(0, 0, 0, 0.05))
- **Padding**: 
  - Top: 16px (for logo area)
  - Item padding: 8px 16px

### Logo/Brand Area
- **Height**: Approximately 56px
- **Padding**: 0 16px
- **Alignment**: Left-aligned
- **Logo size**: 24px × 24px
- **Brand text**: 18px, semi-bold

### Navigation Items
- **Height**: 40px per item
- **Padding**: 8px 16px
- **Icon**: 20px × 20px, left-aligned
- **Text**: 14px, medium weight, left-aligned with 12px spacing after icon
- **Active state**: 
  - Left border: 3px solid primary blue (#3B82F6)
  - Text color: Primary blue (#3B82F6)
  - Background: Very light blue (rgba(59, 130, 246, 0.05))
- **Hover state**: 
  - Background: Light gray (#F3F4F6)
- **Spacing**: 4px vertical gap between items

## Header Section

### Title Area
- **Padding**: 24px 24px 16px 24px
- **Title**: "Welcome to Inventory Optimizer"
  - Font: 24px, bold
  - Color: Dark gray (#111827)
- **Subtitle**:
  - Font: 14px, regular
  - Color: Medium gray (#6B7280)
  - Margin-top: 4px

## Metrics Cards Container

### Layout
- **Display**: Flex row
- **Gap**: 16px
- **Margin**: 24px 0
- **Flex behavior**: Cards should grow equally to fill available space
- **Responsive**: Stack vertically on small screens (below 768px)

### Individual Metric Card
- **Background**: White (#FFFFFF)
- **Border radius**: 8px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Padding**: 16px
- **Min-width**: 160px
- **Layout**: Flex column
- **Content arrangement**:
  - Metric value: Top
  - Label: Bottom
  - Indicator: Visual color association

### Metric Value Display
- **Font**: 20-22px, bold
- **Color**: Dark gray (#111827)
- **Margin-bottom**: 4px

### Metric Label
- **Font**: 14px, regular
- **Color**: Medium gray (#6B7280)

### Color Indicators
- Each card has its own color identity:
  - First card: Primary blue (#3B82F6)
  - Second card: Success green (#22C55E)
  - Third card: Warning orange (#F97316)
  - Fourth card: Danger red (#EF4444)
- Indicator could be:
  - Subtle top border (3px)
  - Background color tint
  - Small colored icon or dot

## Data Section Container

### Layout
- **Display**: Grid
- **Grid template**: Two equal columns (1fr 1fr)
- **Gap**: 24px
- **Margin-top**: 24px
- **Responsive**: Single column on small screens (below 768px)

### Section Panels (Current Inventory & Product Categories)
- **Background**: White (#FFFFFF)
- **Border radius**: 8px
- **Shadow**: 0 1px 3px rgba(0, 0, 0, 0.1)
- **Padding**: 16px
- **Height**: Equal height (min-height: 250px)

### Section Headers
- **Font**: 18px, medium/semi-bold
- **Color**: Dark gray (#111827)
- **Margin-bottom**: 16px
- **Padding-bottom**: 8px
- **Border-bottom**: 1px solid very light gray (#E5E7EB) (optional)

## Current Inventory Panel

### List/Table Structure
- **Row height**: Approximately 36px
- **Row padding**: 8px 0
- **Borders**: Optional light separators between rows (1px #E5E7EB)

### Item Display
- **Name**:
  - Font: 14px, regular
  - Color: Dark gray (#111827)
  - Alignment: Left
- **Value**:
  - Font: 14px, medium
  - Color: Dark gray (#111827)
  - Alignment: Right

## Product Categories Panel

### Bar Chart
- **Bar height**: 24px
- **Bar spacing**: 12px vertical gap
- **Border radius**: 4px (on bars)
- **Colors**: Use the established color palette for different categories
  - Green: #22C55E
  - Blue: #3B82F6
  - Orange: #F97316

### Labels
- **Category name**:
  - Font: 14px, regular
  - Color: Dark gray (#111827)
  - Position: Left-aligned, centered vertically with bar
- **Percentage/Value**: 
  - Font: 14px, medium
  - Color: Medium gray (#6B7280)
  - Position: Right-aligned after bar

## Responsive Breakpoints and Behavior

### Sidebar Navigation
- **Desktop**: Full width (240px), always visible
- **Tablet** (< 1024px): Collapsible, toggle button in header
- **Mobile** (< 768px): Hidden by default, slide-in or overlay

### Metrics Cards
- **Desktop**: Row of 4 cards
- **Tablet** (< 1024px): 2×2 grid
- **Mobile** (< 768px): Stacked vertically

### Data Sections
- **Desktop & Tablet**: Two columns
- **Mobile** (< 768px): Single column

### Typography Adjustments
- Page title reduces to 20px on mobile
- Card metrics reduce to 18px on mobile
- Section headers reduce to 16px on mobile
