# Project Structure

This project has been reorganized for better maintainability and easier development. Here's the new structure:

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── index.ts
├── constants/           # Application constants and data
│   ├── services.ts      # Service-related data
│   ├── images.ts        # Image URLs and assets
│   ├── colors.ts        # Color themes and palettes
│   ├── headerConst.tsx  # Navigation and header data
│   └── index.ts
├── hooks/              # Custom React hooks
│   ├── useSlider.ts     # Slider functionality hook
│   ├── useServices.ts   # Services management hook
│   └── index.ts
├── cards/              # Card components for displaying data
│   ├── ServiceCard.tsx
│   ├── PartnerCard.tsx
│   ├── ServiceDetailCard.tsx
│   └── index.ts
├── pages/              # Page components
│   ├── B2C.tsx
│   ├── Education.tsx
│   ├── G2C.tsx
│   ├── Insurance.tsx
│   ├── Services.tsx
│   └── Travel.tsx
└── utils/              # Utility functions (if any)
```

## Benefits of This Structure

1. **Separation of Concerns**: Each directory has a specific purpose
2. **Easy Maintenance**: Changes to constants, hooks, or components are isolated
3. **Reusability**: Components and hooks can be easily reused across the application
4. **Scalability**: Easy to add new components, constants, or hooks
5. **Clean Imports**: Index files provide clean import paths

## Usage Examples

### Importing Constants

```typescript
import { topServices, sliderImages, circleColors } from "./constants";
```

### Importing Hooks

```typescript
import { useSlider, useServices } from "./hooks";
```

### Importing Components

```typescript
import { Header, Footer } from "./components";
import { ServiceCard, PartnerCard } from "./cards";
```

### Importing Everything from a Category

```typescript
import * as Constants from "./constants";
import * as Hooks from "./hooks";
import * as Cards from "./cards";
```

## File Organization Rules

1. **Components**: UI components that can be reused across pages
2. **Constants**: Static data, configuration, and application constants
3. **Hooks**: Custom React hooks for shared logic
4. **Cards**: Specialized card components for displaying data
5. **Pages**: Page-level components that use the above

This structure makes it easy to:

- Find and edit specific functionality
- Add new features without affecting existing code
- Maintain consistency across the application
- Scale the project as it grows





