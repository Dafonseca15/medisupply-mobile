// Sistema de espaciado de MediSupply

export const spacing = {
  // Espaciado base (4px)
  xs: 4,    // 4px
  sm: 8,     // 8px
  md: 16,    // 16px
  lg: 24,    // 24px
  xl: 32,    // 32px
  xxl: 48,   // 48px
  xxxl: 64,  // 64px
  
  // Espaciado específico
  padding: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  margin: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  
  // Espaciado de componentes
  component: {
    padding: 16,
    margin: 8,
    gap: 12,
  },
  
  // Espaciado de layout
  layout: {
    container: 16,
    section: 24,
    screen: 32,
  },
} as const;

export type SpacingKey = keyof typeof spacing;
