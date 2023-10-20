# <p align="center">Forma de saber en que plataforma estamos trabajando</p>
- React Native proporciona dos formas de organizar su código y separarlo por plataforma:
  - Usando el Platform module .
  - Usando platform-specific file extensions .

## Platform module
- React Native proporciona un módulo que detecta la plataforma en la que se ejecuta la aplicación. Puede usar la lógica de detección para implementar código específico de la plataforma.
```
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 200 : 100
});
```
- `Platform.OS` será `ios` cuando se ejecute en iOS y `android` cuando se ejecute en Android.

- También hay un método `Platform.select` disponible, que dado un objeto donde las claves pueden ser una de `'ios' | 'android' | 'native' | 'default'` , devuelve el valor más adecuado para la plataforma en la que se está ejecutando actualmente. Es decir, si está ejecutando en un teléfono, tendrán preferencia las teclas `ios` y `android` . Si no se especifican, se utilizará la clave `native` y luego la clave `default` .

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

- Dado que acepta el valor any , también puede usarlo para devolver componentes específicos de la plataforma, como a continuación:
```
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid')
})();

<Component />;

// Ó

const Component = Platform.select({
  native: () => require('ComponentForNative'),
  default: () => require('ComponentForWeb')
})();

<Component />;
```

- Detección de la versión de Android y iOS
```
import { Platform } from 'react-native';

if (Platform.Version === 25) {
  console.log('Running on Nougat!');
}
// Version está configurado en la versión de Android API

import { Platform } from 'react-native';

const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}
// En iOS,, el Version es el resultado de -[UIDevice systemVersion]
```

