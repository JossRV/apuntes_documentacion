## Antes de empezar con Angular
```
    -> HTML, CSS y Javascript: Angular esta basado en estos tres lenguajes de programación web. 
    Es fundamental tener un buen conocimiento de ellos antes de empezar con Angular
```

## POO
```
    -> Programación orientada a objetos: Angular es una plataforma que esta diseñada para trabajar con programación orientada a objetos. Es importante entender cómo funcionan los objetos y las clases
```
## Typescript
``` 
    -> Angular está desarrollado en TS, un superset de JS que agrega tipos y caracteristicas adicionales al lenguaje. Aunque no es imprescindible saber TS para empezar con Angular, es recomendable tener una base para aprovechar mejor la plataforma
```
## Arquitectura de aplicaciones web
```
    ->Es fundamental conocer cómo se estructuran las aplicaciones web y como se relacionan los diferentes componentes para poder aprovechar al maximo la arquitectura de Angular. Estas pueden ser MVC y MVVM (model view viewModel) o simplememte un componente web
```
## Frameworks de desarrollo web
```
    -> Es importante tener conocimientos previos en frameworks de desarrollo web como React o Vue.js para poder comparar y entender las ventajas que ofrece Angular. Sin embargo el conocimiento de MVC, jQuery o un conocimiento abstracto de JS pueden funcionar para comprender Angular, incluso frameworks basados en backend
```
## ¿Quien creó Angular?
```
    ->Angular fue desarrollado originalmente por un equipo de ingenieros de Google, liderado por Misko Hevery
    -> Misko Hevery es un ingeniero de software y arquitecto de software que trabajo en Google desde 2005 hasta 2012. Durante su tiempo de google, lidero el equipo que desarrolló AngularJS, la primera versión del framework Angular == Creo otros proyectos de codigo abierto como JMock y Mockito que son herramientas de prueba de software para Java
```
## Angular
```
    -> Angular es un framework de desarrollo web de codigo abierto creado y mantenido por Google. Se utiliza para crear aplicaciones web de una sola página (Single Page Application - SPA) y aplicaiones web dinamicas que se ejecutan en el navegador del usuario
```
## SPA - (Single Page Aplication)
```
    ->Una Single Page Application (SPA) es una aplicación web que se ejecuta en una sola pagina web sin necesidad de recargar la pagina completa cada vez que el usuario navega a diferentes secciones de la aplicación
    -> Imagina que estás utilizando una aplicación web como Facebook o Instagram. En lugar de tener que cargar una nueva página web cada vez que haces clic en un enlace o boton, la pagina actual se utiliza con la información nueva y el contenido de la página se carga dinamicamente
```
## Secciones de una SPA
```
    ->Básicamente las secciones de una página SPA son componentes web
    ->Estos componentes web tienen cada una de las funciones de la pagina web y pueden reciclarse tan facil como si de una etiqueta HTML se tratara (Para que se pueda considerar como componente utiliza HTML, JS, CSS)
```
## ¿Qué es un componente web?
```
    ->Un componente web es una parte modular y reutilizable de una página web que tiene una funcionalidad especifica y puede ser integrada en diferentes páginas web y aplicaciones web. Los componentes web pueden incluir elementos como botones, formularios, menus desplegables, carruseles de imágenes, iconos y mucho mas.
```
## Ejemplos de SPA
```
    ->Gmail: El correo electronico de Google es una aplicación web SPA que carga una sola pagina HTML y actualiza dinamicamente el contenido a medida que los usuarios leen, escriben y eliminan correos electronicos
    ->Twitter: La red social de microblogging utiliza una arquitectura de aplicacion web SPA que carga una sola pagina HTML y actualiza dinamicamente el contenido a medida que los usuarios navegan por su linea de tiempo, escriben tweets y siguen a otros usuarios.
```
## En que se basa Angular
```
    ->Angular esta basado en varios lenguajes y tecnologias de programación web, incluyendo HTML, CSS y JS
    ->En particular, Angular está construido sobre el lenguaje de programación TS
    ->Ademas, Angular utiliza varias bibliotecas y herramientas de desarrollo web, como RxJS y Webpack
```
## ¿Qué es RxJS?
```
    ->Es una biblioteca de programación reactiva que permite a los desarrolladores crear aplicaciones que reaccionen a eventos y datos en tiempo real. La programación reactiva se basa en la idea de que los datos son flujo continucio de información, y RxJS proporciona herramientas para manejar estos flujos de datos de manera asincróna y en tiempo real
```
## Ejemplo de RxJs
```
    ->Manejo de eventos del usuario: RxJS se puede utilizar para manejar eventos del usuario, como clics en botones o cambios en los campos de entrada. Por ejemplo, un flujo de eventos podrían representar los clicks en un botón de "Agregar" en una lista de tareas, que activa la adición de una nueva tarea a la lista
```
## Creación de un proyecto Angular
```
    ->Tener instalado NodeJS
    ->npm install -g @angular/cli
    ->Revisar version de angular: ng version
    ->ng new my-app
    ->ng serve o ng serve -o
```
## Interpolación
```
    ->La interpolación en angular puede insertar una propiedad de app.components.ts en app.component.html, por ejemplo definimos una propiedad en el archivo ts
        -> public titulo : string = 'Hola mundo';
    ->En el archivo html ponemos
        ->{{titulo}}
```
## Evento Click en angular
```
    ->El evento clic en anguar es igual al evento onclick en js vanilla, sin embargo se define de una forma diferente y tambien el performance es superior
        ->Ejemplo de clic en angular
        <button (click)="funcion ts o codigo plano js">Hola</button>
```
## Agregar estulo global en mi app
```
    -> con el siguiente link se debe copiar en los estilos globales
        ->LINK: https://gist.github.com/Klerith/3ddee04a27c09be05e888d5d4ac1d09f
```

