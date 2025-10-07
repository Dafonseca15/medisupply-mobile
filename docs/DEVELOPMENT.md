# Guía de Desarrollo - MediSupply Mobile 📱

## 🎯 Objetivo

Esta guía te ayudará a entender la arquitectura, patrones y mejores prácticas utilizadas en el desarrollo de MediSupply Mobile.

## 🏗️ Arquitectura del Proyecto

### Patrón por Características (Feature-Based)

```
src/
├── components/           # Componentes reutilizables
│   ├── common/          # Componentes genéricos (Button, Input, Card)
│   ├── forms/           # Componentes de formularios
│   └── ui/              # Componentes de interfaz específicos
├── features/            # Módulos por funcionalidad
│   ├── auth/           # Autenticación y autorización
│   ├── inventory/      # Gestión de inventario
│   ├── orders/         # Sistema de pedidos
│   └── profile/        # Perfil de usuario
├── services/           # Servicios y APIs
├── utils/              # Utilidades y helpers
├── hooks/              # Custom hooks
├── types/              # Definiciones TypeScript
├── constants/          # Constantes (colores, espaciado, etc.)
└── __tests__/          # Tests organizados por tipo
```

### Principios SOLID Aplicados

#### 1. Single Responsibility Principle (SRP)
- Cada componente tiene una responsabilidad específica
- Los servicios manejan una sola funcionalidad
- Los hooks encapsulan una lógica específica

#### 2. Open/Closed Principle (OCP)
- Componentes extensibles mediante props
- Servicios configurables mediante parámetros
- Hooks reutilizables con diferentes configuraciones

#### 3. Liskov Substitution Principle (LSP)
- Interfaces consistentes entre componentes similares
- Implementaciones intercambiables de servicios

#### 4. Interface Segregation Principle (ISP)
- Props específicas por componente
- Interfaces pequeñas y enfocadas

#### 5. Dependency Inversion Principle (DIP)
- Inyección de dependencias en servicios
- Abstracciones para APIs externas

## 🧩 Componentes Reutilizables

### Sistema de Diseño

#### Button Component
```typescript
interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}
```

#### Input Component
```typescript
interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  required?: boolean;
  // ... más props
}
```

### Patrones de Componentes

#### 1. Compound Components
```typescript
<Card>
  <Card.Header>
    <Card.Title>Título</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Content>Contenido</Card.Content>
  </Card.Body>
</Card>
```

#### 2. Render Props
```typescript
<DataFetcher>
  {({ data, loading, error }) => (
    <View>
      {loading && <Loading />}
      {error && <Error message={error} />}
      {data && <DataList data={data} />}
    </View>
  )}
</DataFetcher>
```

#### 3. Custom Hooks
```typescript
const useApi = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Lógica de API
  return { data, loading, error, refetch };
};
```

## 🧪 Estrategia de Testing

### Testing Unitario

#### Cobertura Objetivo: 80%+

#### Estructura de Tests
```
__tests__/
├── components/         # Tests de componentes
│   ├── common/        # Tests de componentes comunes
│   ├── forms/         # Tests de formularios
│   └── ui/            # Tests de UI
├── features/          # Tests de features
│   ├── auth/          # Tests de autenticación
│   ├── inventory/     # Tests de inventario
│   └── orders/        # Tests de pedidos
├── hooks/             # Tests de custom hooks
├── services/          # Tests de servicios
└── utils/             # Tests de utilidades
```

#### Ejemplo de Test de Componente
```typescript
describe('Button Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Button title="Test" onPress={() => {}} />
    );
    expect(getByText('Test')).toBeTruthy();
  });

  it('should call onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button title="Test" onPress={mockOnPress} />
    );
    
    fireEvent.press(getByText('Test'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
```

### Testing de Integración

#### Flujos de Usuario
- Login completo
- Creación de pedidos
- Navegación entre pantallas

#### APIs
- Integración con backend
- Manejo de errores
- Estados de carga

### Testing E2E

#### Flujos Críticos
- Autenticación
- Proceso de pedido
- Navegación principal

## 🎨 Sistema de Diseño

### Colores
```typescript
const colors = {
  primary: '#2E7D32',      // Verde médico
  secondary: '#1976D2',   // Azul confianza
  success: '#4CAF50',     // Verde éxito
  warning: '#FF9800',     // Naranja advertencia
  error: '#F44336',       // Rojo error
  // ... más colores
};
```

### Tipografía
```typescript
const typography = {
  h1: { fontSize: 32, fontWeight: 'bold' },
  h2: { fontSize: 24, fontWeight: 'bold' },
  body: { fontSize: 16, fontWeight: 'normal' },
  // ... más estilos
};
```

### Espaciado
```typescript
const spacing = {
  xs: 4,    // 4px
  sm: 8,    // 8px
  md: 16,   // 16px
  lg: 24,   // 24px
  xl: 32,   // 32px
};
```

## 🔧 Herramientas de Desarrollo

### Linting y Formateo
- **ESLint**: Análisis estático de código
- **Prettier**: Formateo automático
- **Husky**: Git hooks para calidad

### Debugging
- **Flipper**: Debugging avanzado
- **React Native Debugger**: Redux DevTools
- **Chrome DevTools**: JavaScript debugging

### Testing
- **Jest**: Framework de testing
- **React Native Testing Library**: Testing de componentes
- **Detox**: Testing E2E (próximamente)

## 📱 Características de la App

### Para Laboratorios
- Gestión de inventario
- Control de caducidad
- Alertas de stock
- Reportes de consumo

### Para Clínicas
- Catálogo de productos
- Pedidos rápidos
- Historial de compras
- Notificaciones

### Para Droguerías
- Gestión de proveedores
- Control de precios
- Análisis de ventas
- Integración con sistemas

## 🚀 Comandos de Desarrollo

### Desarrollo
```bash
npm start                 # Metro Bundler
npm run ios              # iOS Simulator
npm run android          # Android Emulator
```

### Testing
```bash
npm test                 # Tests unitarios
npm run test:watch      # Tests en modo watch
npm run test:coverage   # Tests con cobertura
```

### Linting
```bash
npm run lint             # Verificar código
npm run lint:fix         # Corregir errores
```

### Build
```bash
npm run build:ios        # Build iOS
npm run build:android    # Build Android
```

## 📚 Recursos de Aprendizaje

### Documentación
- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### Cursos
- React Native - The Practical Guide
- React Native Advanced Concepts
- Testing React Native Apps

### Libros
- "React Native in Action" - Nader Dabit
- "Learning React Native" - Bonnie Eisenman

## 🤝 Contribución

### Git Flow
1. **Feature branches**: `feature/nombre-feature`
2. **Bug fixes**: `fix/descripcion-bug`
3. **Hotfixes**: `hotfix/descripcion-urgente`

### Code Review
- Revisión obligatoria
- Tests deben pasar
- Cobertura no debe disminuir
- Linting sin errores

---

**¡Feliz desarrollo! 🚀**
