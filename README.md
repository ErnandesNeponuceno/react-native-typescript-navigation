
# 🚀 React Native - Tipos de Navegação

Este projeto explora **3 tipos de navegação** no React Native usando o `React Navigation`:
1. **Navegação por Stack**: Transições entre telas empilhadas.
2. **Navegação por Bottom Tabs**: Abas na parte inferior para alternar entre telas.
3. **Navegação por Drawer**: Menu lateral que desliza para alternar entre telas.

---

## 🎯 Funcionalidades

- **Navegação por Stack**:
  - Permite transições entre telas simulando uma pilha (stack).
  - Exibe cabeçalhos personalizáveis nas telas.
  - Ideal para fluxos simples e hierárquicos.

- **Navegação por Bottom Tabs**:
  - Adiciona uma barra de navegação na parte inferior.
  - Cada aba possui um ícone personalizado.
  - Ótimo para alternar entre seções principais do aplicativo.

- **Navegação por Drawer**:
  - Adiciona um menu deslizante lateral.
  - Permite acessar rapidamente diferentes telas do aplicativo.
  - Popular em aplicativos com muitas seções.

---

## 🗂️ Estrutura do Projeto

```plaintext
├── src/
│   ├── routes/
│   │   ├── stack.routes.tsx       # Configuração da navegação por Stack
│   │   ├── bottom.routes.tsx      # Configuração da navegação por Bottom Tabs
│   │   ├── drawer.routes.tsx      # Configuração da navegação por Drawer
│   ├── screens/
│   │   ├── HomeScreen.tsx         # Tela inicial com botão para Galeria
│   │   ├── GalleryScreen.tsx      # Tela de galeria com botão para Home
├── App.tsx                         # Configuração inicial do aplicativo
├── babel.config.js                 # Configuração do Babel para animações
```

---

## 🚀 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>

---

## 📄 Detalhes de Cada Navegação

### **1. Navegação por Stack**
Configuração no arquivo `stack.routes.tsx`:
- Empilha telas, simulando um fluxo de navegação hierárquico.
- Exibe cabeçalhos (headers) que podem ser personalizados ou desativados.

```tsx
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GalleryScreen from '../screens/GalleryScreen';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
      <Screen name="Gallery" component={GalleryScreen} />
    </Navigator>
  );
}
```

---

### **2. Navegação por Bottom Tabs**
Configuração no arquivo `bottom.routes.tsx`:
- Adiciona uma barra de navegação na parte inferior.
- Ícones personalizados usando o pacote **Expo Material Icons**.
- Ideal para alternar entre seções principais do aplicativo.

```tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons
            name='home'
            color='#000'
            size={size}
          />
        )}}

      />
      <Tab.Screen 
        name="Gallery" 
        component={GalleryScreen}
        options={{tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons
            name='view-gallery'
            color='#000'
            size={size}
          />
        )}}
      /> 
    </Tab.Navigator>
  );
}
```

---

### **3. Navegação por Drawer**
Configuração no arquivo `drawer.routes.tsx`:
- Adiciona um menu lateral deslizante.
- Permite acessar diferentes telas por meio de um menu.
- Popular em aplicativos com muitas seções.

```tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Gallery" component={GalleryScreen} />
    </Navigator>
  );
}
```

---

## 📌 Como Alternar entre Tipos de Navegação

No arquivo `Routes.tsx`, você pode alternar entre os tipos de navegação comentando/descomentando as rotas desejadas:

```tsx
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './stack.routes';
import { BottomTabsRoutes } from './bottom.routes';
import { DrawerRoutes } from './drawer.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* <DrawerRoutes /> */}
      <StackRoutes />
      {/* <BottomTabsRoutes /> */}
    </NavigationContainer>
  );
}
```

---

## 📌 Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd react-native-typescript-navigation
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o Expo:**
   ```bash
   npx expo start
   ```

---

## 📌 Créditos

- **Documentação Oficial do React Navigation:** [React Navigation](https://reactnavigation.org/)
- **Ícones do Expo:** [Expo Vector Icons](https://icons.expo.fyi/)
