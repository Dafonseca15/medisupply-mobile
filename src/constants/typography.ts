// Sistema tipográfico de MediSupply

export const typography = {
  // Títulos
  h1: {
    fontSize: 32,
    fontWeight: 'bold' as const,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontWeight: 'bold' as const,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  
  // Texto del cuerpo
  bodyLarge: {
    fontSize: 16,
    fontWeight: 'normal' as const,
    lineHeight: 24,
  },
  body: {
    fontSize: 14,
    fontWeight: 'normal' as const,
    lineHeight: 20,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: 'normal' as const,
    lineHeight: 16,
  },
  
  // Texto de botones
  button: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 20,
  },
  buttonSmall: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 18,
  },
  
  // Texto de etiquetas
  label: {
    fontSize: 12,
    fontWeight: '500' as const,
    lineHeight: 16,
  },
  
  // Texto de captura
  caption: {
    fontSize: 10,
    fontWeight: 'normal' as const,
    lineHeight: 14,
  },
  
  // Texto de entrada
  input: {
    fontSize: 16,
    fontWeight: 'normal' as const,
    lineHeight: 20,
  },
} as const;

export type TypographyKey = keyof typeof typography;
