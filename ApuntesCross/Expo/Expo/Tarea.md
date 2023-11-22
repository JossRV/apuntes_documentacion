Contador

Text: en medio justo, center

-1 y +1

onLongPress evento


$$20-10-2023FORMMODULE$$
Al crear una aplicación multiplataforma, querrá reutilizar la mayor cantidad de código posible. Pueden surgir escenarios en los que tenga sentido que el código sea diferente, por ejemplo, es posible que desee implementar componentes visuales separados para Android y iOS..

React Native proporciona dos formas de organizar su código y separarlo por plataforma:

- Usando el platform Module.
- Usando platform-specific file extensions.

Ciertos componentes pueden tener propiedades que funcionan solo en una plataforma. Todos estos accesorios están anotados con `@platform` y tienen una pequeña insignia junto a ellos en el sitio web.
## Platform module

React Native proporciona un módulo que detecta la plataforma en la que se ejecuta la aplicación. Puede usar la lógica de detección para implementar código específico de la plataforma. Utilice esta opción cuando solo las partes pequeñas de un componente sean específicas de la plataforma.
```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
```
`Platform.OS` será `ios` cuando se ejecute en iOS y `android` cuando se ejecute en Android.

También hay un método `Platform.select` disponible, que dado un objeto donde las claves pueden ser una de `'ios' | 'android' | 'native' | 'default'` , devuelve el valor más adecuado para la plataforma en la que se está ejecutando actualmente. Es decir, si está ejecutando en un teléfono, tendrán preferencia las teclas `ios` y `android` . Si no se especifican, se utilizará la clave `native` y luego la clave `default` .
```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'green'
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue'
      }
    })
  }
});
```

### Detección de la versión de Android

En Android, el módulo `Platform` también se puede usar para detectar la versión de la plataforma Android en la que se ejecuta la aplicación:

```
import { Platform } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
```


# - Como podemos navegar en react native
- Pagina consultada: https://www.digitalocean.com/community/tutorials/react-react-native-navigation-es#paso-1-crear-una-nueva-aplicacion-react-native
- https://reactnavigation.org/docs/navigation-lifecycle/

```
- Paso 1: Crear una nueva aplicación React Native
- Paso 2: Crear una pantalla HomeScreen y otra pantalla a la cual podremos navegar
- Paso 3: Usar StackNavigator con React Navigation (instalar)
- Paso 4: Se hacen las importaciones dentro de la aplicación de las dependencias
```

```
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


```

```jsx
Así se debera ver la pagina
class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
```

```jsx
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
```

+ De igual manera se debera hacer la importación para la segunda pestaña a navegar

```jsx
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import FriendsScreen from './FriendsScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
```
#### Para instalar en el proyecto
```
yarn add @react-navigation/native@5.7.3 
yarn add @react-navigation/stack@5.9.0 @react-native-community/masked-view@0.1.10 react-native-screens@2.10.1 react-native-safe-area-context@3.1.4 react-native-gesture-handler@1.7.0
```
