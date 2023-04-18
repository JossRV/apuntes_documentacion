# <center>Convenciones de nombres</center>
- Por defecto App en TS es {app.component.ts} 
- otro ejemplo: **altasBajas.component.ts**
- Tambien podemos ver que el selector se llama **app-root**
- Y por ultimo en el **app.module.ts** que es el modulo principal del proyecto y tambien como nombre de clase es: **AppComponent**
- Ejemplo:

componente para calificaciones:
> //componentes .ts .html .css
> 
> calificaciones.component.ts
> 
> //selector
> 
> calificaciones-root
> 
> //clase iniciando con mayusculas
> 
> CalificacionesComponent
> 
> Si van a ser nombres compuestos es con guión medio '-'
# <center>Elementos necesarios para crear un componente</center>
- Archivos **ts**, **html** y **css**
- En el archivo TS necesitamos:
    - clase con export
    ```
        export class AppComponent{}
    ```
    - importacion y decorador component 
    ```
        import { Component } from '@angular/core';
        @Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ```
# <center>Creacion de componentes mediante consola</center>
- Abrimos CLI
```
    // Al agregar el nombre del componente, se crea la carpeta misma junto los demas componentes.
    ng generate component carpeta/nombreComponente
    // Abreviaciones de comando
    ng g c carpeta/nombreComponente
    // Generar solo carpeta de componentes
    ng g c nombreComponente
```
- Podemos olvidar poner component al final ya que el cli lo infeiere de manera automatica.
- Tambien veremos que mapea el modulo y agrega nuestro componente de manera automatica.
# <center>Directiva *ngFor</center>
Para probarlo vamos a crear un arreglo.
- TYPESCRIPT
```
    public heroes:string[] = ['1','2','3'];
```
    
- HTML
```
    <ul>
        <li></li>
    </ul>
    <ul>
        <li *ngFor="let heroe of heroe"></li>
    </ul>
    <ul>
        <li *ngFor="let heroe of heroes">{{heroe}}</li>
    </ul>
    <ul>
        <li *ngFor="let item of items; as myItem">{{myItem}}</li>
    </ul>
```

# <center>*ngFor en tablas</center>
- En el archivo ts
```
    public usuarios: any = [
        {id:1, nombre:"Joss"},
        {id:2, nombre:"mitzi"},
        {id:3, nombre:"faty"},
    ];
```

- Archivo html
```
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>nombre</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let usuario of usuarios">
                <td>{{usuario.id}}</td>
                <td>{{usuario.nombre}}</td>
            </tr>
        </tbody>
    </table>
```

# <center>Directiva *ngFor en divs</center>
Usando el mismo archivo ts anterior.
- HTML
```
    <ng-container *ngFor="let usuario of usuarios">
        <div>Nombre: {{usuario.nombre}}</div>
        <div>id: {{usuario.id}}</div>
    </ng-container>
```

# <center>Directiva *ngIf</center>
El uso de *ngIf se usa para mostrar u ocultar elementos en la vista
- Sintaxis
```
    //if
    <div *ngIf="condicion">
        <p>contenido</p>
    </div>

    //if-else
    <div *ngIf="condicion ; else mensaje">
        <p>contenido</p>
    </div>

    <ng-template #mensaje>
        <p>La condicion es falsa</p>
    </ng-template>
```