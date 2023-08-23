### Para implementar bootstrap en Angular de manera local, se deben llevar a cabo los siguientes puntos:
- Crear el proyecto con scss
- instalar el bootstrap, jquery y popper con node
```
    npm install bootstrap jquery @popperjs/core
```
- Agregar las dependendencias en los objetos **style** y **scrips** en el archivo angular.json
```
    "styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]
```