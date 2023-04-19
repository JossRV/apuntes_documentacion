> Typescript fue desarrollado por microsoft y presentado en el 2012.
> 
> Fue creado con el fin de mejorar las practicas en el uso de JS
#  ¿Qué es Typescript?
- Es un lenguaje de programación de codigo abierto que se basa en JS y que agrega caracteristicas de tipado estatico o estricto
- Y otros elementos de lenguajes de programación orientados a objetos y funcionales. 
- Esto permite escribir codigo mas seguro y facil de mantener, especialmente para proyectos grandes y complejos. 
- Typescript es compilado a JS para que se pueda ejecutar en cualquier navegador web, o entorno de servidor que admita JS
# Poner en marcha un servicio de typescript
1. Instalar NodeJS (npm)
2. Instalar Typescript
3. Crear una carpeta para el proyecto
4. Crear index.html
5. Agregar
6. Crear archivo app.ts
7. Dentro de app.ts escribir -> console.log(""); 
8. ejecutamos el siguiente comando {tsc *.ts -w}

# Declaracio de variables en TS
- En TS, las variables se pueden declarar usando las palabras clave "**let** y **const**". 
- Ademas, TS admite el **typado estatico o estricto**, lo que significa que podemos especificar el tipo de una variable cuando se declaran
```
    let nombreVariable:tipo = asignacionValor
```
### tipos de datos en typescript
 - **number**: para valores numéricos, incluyendo enteros y decimales.
- **string**: para valores de texto, como palabras y frases.
- **boolean**: para valores verdadero o falso.
- **null**: para valores nulos.
- **undefined**: para valores no definidos.
- **any**: para cualquier tipo de valor, lo que significa que no se verifica el tipo en tiempo de compilación.
- **void**: para funciones que no devuelven ningún valor.
- **array**: para colecciones de valores del mismo tipo.
- **tuple**: para colecciones de valores de diferentes tipos, con una longitud fija.
- **enum**: para crear un conjunto de valores con nombre.
- **object**: para tipos de objetos.
- **interface**: para definir la forma de un objeto.
- **union**: para declarar un tipo que puede ser uno de varios tipos diferentes.
- **intersection**: para declarar un tipo que tiene propiedades de varios tipos diferentes.
- **function**: para declarar el tipo de una función.
