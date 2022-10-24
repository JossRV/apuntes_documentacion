cada que retorna el JSX
se considera un componente con mayusculas
Utiliza el JSX

El archivo mas importante es: index.js

## import React from 'react';
## import { createRoot} from 'react-dom/client';
Etiquetas importantes en el index

Se pueden utilizar variables con JSX por ejemplo:
let encabezado = <h1>Hello World!</h1>;
root.render(encabezado);

Para crear mas de 1 etiqueta hay de 2 formas, con el 
<div></div> o con la etiqueta vacia <></>


Descargar Bootstrap: npm install bootstrap

y para incluirlo es:
### import 'bootstrap/dist/css/bootstrap.min.css'

img, hr, br, meta, link