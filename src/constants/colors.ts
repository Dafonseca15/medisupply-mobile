// Paleta de colores de MediSupply

export const colors = {
  // Colores principales
  primary: '#2E7D32',      // Verde médico
  primaryLight: '#4CAF50', // Verde claro
  primaryDark: '#1B5E20',  // Verde oscuro
  
  // Colores secundarios
  secondary: '#1976D2',     // Azul confianza
  secondaryLight: '#42A5F5', // Azul claro
  secondaryDark: '#0D47A1', // Azul oscuro
  
  // Colores de estado
  success: '#4CAF50',       // Verde éxito
  warning: '#FF9800',       // Naranja advertencia
  error: '#F44336',         // Rojo error
  info: '#2196F3',         // Azul información
  
  // Colores neutros
  background: '#FAFAFA',    // Fondo claro
  surface: '#FFFFFF',      // Superficie
  surfaceVariant: '#F5F5F5', // Superficie variante
  
  // Colores de texto
  text: '#212121',         // Texto principal
  textSecondary: '#757575', // Texto secundario
  textDisabled: '#BDBDBD', // Texto deshabilitado
  textOnPrimary: '#FFFFFF', // Texto sobre primario
  
  // Colores de borde
  border: '#E0E0E0',       // Borde claro
  borderFocus: '#2E7D32', // Borde primario
  borderError: '#F44336', // Borde error
  
  // Colores de sombra
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
  
  // Colores de overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(0, 0, 0, 0.3)',
} as const;

export type ColorKey = keyof typeof colors;
