##### ¿Por que expo?
Por que te da un proyecto mas sencillo y limpio unicamente para que lo puedas comenzar a trabajar
`Crear nuevo proyecto de expo atravez de yarn`
```
yarn create expo-app
```
Dentro de React Native no tiene Bootstrap ni Tailwind si no que es con Css
 $$Estructura de carpetas 10/10$$

expo: Contiene lo necesario para visualizar nuestro proyecto (nosotros no lo modificamos)
assets: Imágenes que se van a utilizar dentro de la aplicación es similar a public (Archivos estaticos)
node_modules: Dependencias del proyecto para que funcione en desarrollo
.gitignore: Control de versiones del git
App.js: punto de entrada de la aplicación
app.json: Metadatos de la aplicación como varias cosas detalladas de esta misma
babel.config.js: Nos va a ayudar a hacer nuestro codigo compatible, es un transpilador para Ecma 6
package.json: Metadatos de la aplicación, junto con scrips, nombre, dependencias
![[Pasted image 20231010185801.png]]

Comando para yarn para instalar dependencias de web
```
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```
### Componentes específicos:
- View

### ¿Como funcionan los elementos en ReactNative?

- Size
- Padding
- Border
- Margin

## Resolver una peticion en react native con promesas:
```
El use effect se utiliza para poder utilizar una sola vez, cada vez que cambia una dependencia, o si existe algun cambio de alguna variable

useEffect(() => {
	const httpRequest = mineAPI.get("/mobs")
	 httpRequest.then((response) => {
	setdataMobs(response.data);
})
 }, [])
 
Aqui se podria mostrar el dato, sin embargo en este caso se tiene que utilizar async y await
{
 dataMobs.mobs.map(mob => <Text>{mob.nombre}</Text>)
}
```

