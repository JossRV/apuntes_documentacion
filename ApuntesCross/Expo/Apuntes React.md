- Los componentes usan la notación Upper camel case es la diferencia principal de JS nativo
- Ejemplo de componente, así siempre se van a nombrar los componentes
~~~
function PaginaPricipal() {}
~~~
> JSX: JavaScript + HTML

### <> </> Esto se conoce como fragment

*Nota*: 
- Todo componente retorna JSX
- Retorna una única linea de JSX

Gracias a la template string dentro de JSX se puede inyectar código JS directamente
### Forma de poder utilizar una función en flecha
![[Pasted image 20230829132008.png]]

#### Snipped a utilizar para crear componentes de flecha
```
rafc
```

### Para instalar bootstrap con yarn
```
yarn add bootstrap@5.3.1 && yarn add @popperjs/core@^2.11.8
```

### useState

**Toda la lógica de un componente va después del export y antes de la palabra return
Los estados se pueden utilizar true o false
El uso de useState en cuanto a código:  ``const [state, setState] = useState (initialState)``
El estado inicial o [state] es igual a el initialState
Handler: Manejador de eventos**


Desventajas que tienen las props: son el flujo que se tiene, un padre puede mandar datos, pero el componente hijo no puede mandar props

#### Ejemplo en Árbol de trabajo

##### App
	Header
	Card
	Footer
	Formulario

> En este caso solo desde App se pueden mandar a las distintas dentro de su jerarquía

Para utilizar algun evento con click
```
const [state, setState] = useState(false);

const clickHandler = () => {

	setState(!state);

 };
```
Todo ello acompañado de su onclick
`onClick={clickHandler} `

> Se va a utilizar MAP por que este permite tener un retorno

##### Dispatch
>función que nos va a ayudar a disparar acciones en el reduce, este va a evaluar el switch (reducer)

$$8/09/2023$$
__State__: Estado en un momento dado que su valor varia por eventos
__useState()__ -> Hook y función
__Hooks:__ Funciones que retornan funcionalidad
__Props:__ Cuando un componente recibe un argumento

$$19/09/2023$$
__useEffect();__ //Ejecuta algo siempre y cuando haya algún cambio
```
useEffect(() => {

    //Estado

    first

    return () => {

      //Apartado de limpieza

      second

    }

    //Arreglo de dependencias, una o mas dependencias o vacio

  }, [third])
```



##### Dist: Es una carpeta de distribución

![[Pasted image 20230922122852.png]]
Todo esto se necesito para crear una aplicación terminada

$$26/09/23$$
Para crear un archivo barril, se debe llamar "index.js" y este va a utilizar las export por ejemplo:
```
export * from "./Tareas/Tareas"

export * from "./Footer/Footer"

export * from "./FormularioTareas/FormularioTareas"

export * from "./Header/Header"
```

Hooks: funciones que retornan funcionalidad

Refactorizando: Simplificar la lógica del código


#### Componentes de orden superior:
```
 <React.StrictMode>

    <App />

  </React.StrictMode>,
```
Tiene una etiqueta que abre y otra que cierra.
> ¿Cómo se hacen?

Normalmente se utilizan como plantillas




