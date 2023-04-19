# <p align="center">ng-model</p>
- Es una directiva en angular.js que representa a los modelos vinculando la vista al modelo.
# <p align="center">Uso</p>
- En modulo app.module.ts importamos la clase forms
```
    import { FormsModule } from '@angular/forms';
```
- Agregamos en la seccion de imports
```
    imports: [
        BrowserModule,
        FormsModule
    ],
```
# <p align="center">Declaraciones en nd-model</p>
- En la clase AppComponent creamos la propiedad nombre
```
    nombre = "juan";
```
- en la vista definimos la directiva usando la sintaxis "banana in a box"
```
    <input type="number" [(ngModel)]="lado">
```

# <p align="center">CRUD</p>
- Creacion de propiedades
```
    inventario: any = [
        { id: 1, nombre: "Pantalones", precio: 200 },
        { id: 2, nombre: "Sueter", precio: 400 },
    ];
    formulario: any = {
        id: null,
        nombre: null,
        precio: null
    }
```
- Creamos la tabla en html
```
    <table >
        <thead>
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Seleccionar</th>
            <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
            <button class="btn btn-outline-primary" (click)="seleccionar(articulo)">Seleccionar</button>
            </td>
            <td>
            <button class="btn btn-outline-danger" (click)="eliminar(articulo.id)">Eliminar</button>
            </td>
        </tr>
        </tbody>
    </table>
```
- Creamos el formulario
```
    <div class="col-6">
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="id">
            <label for="floatingInput">id</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" placeholder="nombre">
            <label for="floatingInput">nombre</label>
        </div>
        <div class="form-floating mb-3">
            <input type="number" class="form-control" id="floatingInput" placeholder="precio">
            <label for="floatingInput">precio</label>
        </div>
        <div class="d-grid gap-3 col-6 mx-auto">
            <button class="btn btn-outline-dark" (click)="agregar()">Agregar</button>
            <button class="btn btn-outline-warning" (click)="editar()">Editar</button>
            <button class="btn btn-outline-primary" (click)="limpiar()">Limpiar</button>
        </div>
    </div>
```
- Despliegue de informacion en la tabla usando la directiva *ngFor
- Se lo agregamos al tr
``` 
    <tr *ngFor="let articulos of inventario">
```
- agregamos al propiedades en los td
```
    <td> {{ articulos.id }} </td>
```
- Creamos las funciones de los botones en ts
```
    public seleccionar(articulos:any) : void { }
    public eliminar(id:number) : void { }
```
- Estructura de botones en la vista
```
    <button (click)="eliminar(articulos.id)">Borrar</button>
    <button (click)="seleccionar(articulos)">Seleccionar</button>
```
- Agregamos el ng-model en el input
```
    <input type="number" [(ngModel)]="formulario.id">
```
> aplica para los demas inputs con diferente nombre
- Funciones ts de agregar y editar formulario
```
    public agregar() : void {}
    public editar() : void {}
```
- Vista
```
    <button (click)="agregar()">Agregar</button>
    <button (click)="editar()">Editar</button>
```
- Funcion de insercion de datos
```
    agregar(): void {
        const datoNuevo = {
            id: this.formulario.id,
            nombre: this.formulario.nombre,
            precio: this.formulario.precio,
        };
        this.inventario.push(datoNuevo);
        return alert("agregado con exito");
    };
```
- Funcion de eliminar
``` 
    eliminar(id: number): void {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].id == id) {
                this.inventario.splice(i, 1);
                return alert("Eliminado con exito");
            }
        }
    };
```
> El metodo splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
- Funcion seleccionar
```
    seleccionar(articulos: any): void {
        this.formulario.id = articulos.id;
        this.formulario.nombre = articulos.nombre;
        this.formulario.precio = articulos.precio;
    };
```
- Funcion actualizar
```
    editar(): void {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].id == this.formulario.id) {
                this.inventario[i].id = this.formulario.id;
                this.inventario[i].nombre = this.formulario.nombre;
                this.inventario[i].precio = this.formulario.precio;
                return alert("Actualizado con exito");
            }
        }
    };
```
