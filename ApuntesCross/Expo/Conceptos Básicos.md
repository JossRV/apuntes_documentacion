### ¿Qué es JSX?
Es una extensión de JavaScript la cual también se podría decir que es JavaScript + XML
### Node
*Entorno de desarrollo que permite utilizar JS de manera Nativa*
![[Pasted image 20230822124421.png]]
### Instalación de React
- npm: gestor de paquetes (Construye de manera diferente)
- npx: Ejecutor de paquetes (Optimiza)
- yarn: gestor de paquetes  {Instalación en consola: corepack enable}

- Comando para crear proyecto
```
 yarn create vite
 ```
```
cd {nombre proyecto}
yarn
yarn dev
```
> Estructuración de Carpetas

- **Public**: Son archivos estáticos [imágenes, documentos de Word, Excel, scripts que no reciban cambios]
- node modules: Es la carpeta que contiene todas las dependencias necesarias de nuestro proyecto para el desarrollo
- **src** (fuente): Todo lo que se vaya a programar esta en esta carpeta, todo el código fuente
- **src/assets**: es la carpeta donde almacenaremos recursos utilizados por nuestra aplicación
- **App.css**: Es el archivo de estilos para el componente App.jsx
- **App.jsx**: Es el archivo de definición del componente App.
- **index.css**: Es el archivo de estilos globales de la aplicación
- **main.jsx**: Es el punto de entrada de nuestra aplicación
- **.eslintrc.cjs**: Programa que te ayuda a ver los errores de programación en cuanto a la escritura
- **.gitignore**: Configuración de git que nos ayudan a ignorar archivos o carpetas que no se utilizan 
- **index.html**: Archivo principal, es la entrada a la aplicación, todo lo que hagamos en la aplicación se va a renderizar dentro de 
```
<div id="root"></div>
```
- **package.json**: Este archivo son las dependencias que se utilizaran dentro del archivo, dependencias y dependencias de desarrollo (herramientas que nosotros utilizamos para el desarrollo, pero el cliente no las necesita)
- **README.md**: Es un archivo con información relevante para el tratamiento de la aplicación
- **vite.config.js**: archivo de configuración de como lo estamos instalando
- **yarn.lock**: Es el archivo que define como fue construido el proyecto al correr el comando yarn

> Para instalar las dependencias
~~~
yarn
~~~

#### Para ejecutar el proyecto
~~~
yarn dev
~~~

### Variables

- Regularmente se van a utilizar constantes por que así no va mutar el tipo de dato
- let y var dependen del tipo de Scope (escape)
