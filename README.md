# MediSupply Mobile App 🏥📱

## 🚀 Inicio Rápido

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 20.19.4
- **npm** >= 9.0.0
- **React Native CLI** (se instala automáticamente)
- **Xcode** (para iOS) >= 14.0
- **Android Studio** (para Android) >= 2022.1
- **Java Development Kit (JDK)** >= 17

### Verificar Instalaciones

```bash
# Verificar Node.js
node --version

# Verificar npm
npm --version

# Verificar React Native CLI
npx react-native --version
```

## 📦 Instalación

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd MediSupplyApp
```

### 2. Instalar Dependencias

```bash
# Instalar dependencias de Node.js
npm install

# Para iOS - Instalar CocoaPods
cd ios && pod install && cd ..
```

### 3. Configurar Entorno

#### Para iOS:
```bash
# Asegúrate de tener Xcode instalado
# Abre el proyecto en Xcode
open ios/MediSupplyApp.xcworkspace
```

#### Para Android:
```bash
# Asegúrate de tener Android Studio instalado
# Configura las variables de entorno ANDROID_HOME
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## 🏃‍♂️ Ejecutar la Aplicación

### Desarrollo

```bash
# Iniciar Metro Bundler
npm start

# En otra terminal - Ejecutar en iOS
npm run ios

# En otra terminal - Ejecutar en Android
npm run android
```

### Comandos Disponibles

```bash
# Desarrollo
npm start                 # Iniciar Metro Bundler
npm run ios              # Ejecutar en iOS Simulator
npm run android          # Ejecutar en Android Emulator

# Testing
npm test                 # Ejecutar tests unitarios
npm run test:watch       # Tests en modo watch
npm run test:coverage    # Tests con cobertura

# Linting
npm run lint             # Verificar código
npm run lint:fix         # Corregir errores automáticamente

# Build
npm run build:ios        # Build para iOS
npm run build:android    # Build para Android
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── common/          # Componentes genéricos
│   ├── forms/           # Componentes de formularios
│   └── ui/              # Componentes de interfaz
├── features/            # Módulos por funcionalidad
│   ├── auth/           # Autenticación
│   ├── inventory/      # Inventario
│   ├── orders/         # Pedidos
│   └── profile/        # Perfil
├── services/           # Servicios y APIs
├── utils/              # Utilidades
├── hooks/              # Custom hooks
├── types/              # Definiciones TypeScript
├── constants/          # Constantes
└── __tests__/          # Tests
    ├── components/     # Tests de componentes
    ├── features/       # Tests de features
    └── e2e/           # Tests end-to-end
```

## 🧪 Testing

### Tests Unitarios

```bash
# Ejecutar todos los tests
npm test

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

### Tests E2E

```bash
# Configurar Detox (próximamente)
npm run test:e2e
```

## 🔧 Configuración de Desarrollo

### VS Code (Recomendado)

Instala las siguientes extensiones:

- **React Native Tools**
- **TypeScript Importer**
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**

### Configuración de Debugging

1. **Flipper**: Para debugging avanzado
2. **React Native Debugger**: Para Redux DevTools
3. **Chrome DevTools**: Para debugging de JavaScript

## 📱 Dispositivos Soportados

### iOS
- **Versión mínima**: iOS 13.0
- **Dispositivos**: iPhone 8 y posteriores
- **Simuladores**: iOS 13.0+

### Android
- **Versión mínima**: Android 7.0 (API 24)
- **Dispositivos**: Android 7.0+
- **Emuladores**: Android 7.0+

## 🚨 Solución de Problemas

### Problemas Comunes

#### Metro Bundler no inicia
```bash
# Limpiar cache
npx react-native start --reset-cache
```

#### Problemas con iOS
```bash
# Limpiar build de iOS
cd ios && xcodebuild clean && cd ..
```

#### Problemas con Android
```bash
# Limpiar build de Android
cd android && ./gradlew clean && cd ..
```

#### Problemas con CocoaPods
```bash
# Reinstalar pods
cd ios && pod deintegrate && pod install && cd ..
```

### Logs de Debugging

```bash
# iOS Simulator logs
npx react-native log-ios

# Android logs
npx react-native log-android
```

## 📚 Recursos de Aprendizaje

### Documentación Oficial
- [React Native Docs](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### Guías Específicas
- [Configuración de iOS](https://reactnative.dev/docs/environment-setup#ios)
- [Configuración de Android](https://reactnative.dev/docs/environment-setup#android)

## 🤝 Contribución

### Git Flow

1. **Feature branches**: `feature/nombre-feature`
2. **Bug fixes**: `fix/descripcion-bug`
3. **Hotfixes**: `hotfix/descripcion-urgente`

### Code Review

- Revisión obligatoria antes de merge
- Tests deben pasar
- Cobertura no debe disminuir
- Linting sin errores

## 📞 Soporte

Para problemas técnicos:

1. **Revisar logs**: Usar `npx react-native log-ios` o `npx react-native log-android`
2. **Verificar configuración**: Asegurar que todas las dependencias estén instaladas
3. **Limpiar cache**: Usar `--reset-cache` en Metro Bundler
4. **Reinstalar dependencias**: `rm -rf node_modules && npm install`

---

**¡Listo para desarrollar! 🚀**

Para más información, consulta la documentación completa en `/docs/DEVELOPMENT.md`