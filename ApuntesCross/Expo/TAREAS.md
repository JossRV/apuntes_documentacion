### ¿Qué es Context?
``Context provee una forma de pasar datos a través del árbol de componentes sin tener que pasar _props_ manualmente en cada nivel.
En una aplicación típica de React, los datos se pasan de arriba hacia abajo (de padre a hijo) a través de _props_, pero esta forma puede resultar incómoda para ciertos tipos de _props_ (por ejemplo, localización, el tema de la interfaz) que son necesarias para muchos componentes dentro de una aplicación. Context proporciona una forma de compartir valores como estos entre componentes sin tener que pasar explícitamente una _prop_ a través de cada nivel del árbol.

### Cuándo usar Context

Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.
### Antes de usar Context

Context se usa principalmente cuando algunos datos tienen que ser accesibles por _muchos_ componentes en diferentes niveles de anidamiento. Aplícalo con moderación porque hace que la reutilización de componentes sea más difícil.

Por ejemplo, considera un componente `Page` que pasa una prop `user` y `avatarSize` varios niveles hacia abajo para que los componentes anidados `Link` y `Avatar` puedan leerlo:

``
```
<Page user={user} avatarSize={avatarSize} />
// ... que renderiza ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... que renderiza ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... que renderiza ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```
``

### Reducer
Función que recibe 2 elementos
Estado inicial -> realizar acción -> retornar un nuevo estado

Un _reducer_ ayuda a mantener los controladores de eventos cortos y concisos. Sin embargo, a medida que tu aplicación crece, puedes encontrarte con otra dificultad. **Actualmente, el estado `tasks` y la función `dispatch` sólo están disponibles en el componente de nivel superior `TaskApp`.** Para permitir que otros componentes lean la lista de tareas o la modifiquen, tienes que pasar explícitamente el estado actual y los controladores de eventos que lo cambian como props.
Por ejemplo, `TaskApp` pasa una lista de tareas y los controladores de eventos a `TaskList`:

```
<TaskList  tasks={tasks}  onChangeTask={handleChangeTask}  onDeleteTask={handleDeleteTask}/>
```

Y `TaskList` pasa los controladores de eventos a `Task`:

```
<Task  task={task}  onChange={onChangeTask}  onDelete={onDeleteTask}/>
```

`... state == copia todo el estado, copias exactas`

$$ Tarea Localstorage | Escritura|Lectura $$
### *LocalStorage*
- *¿Que es?*: Es una característica del navegador web que permite almacenar datos de manera persistente en el dispositivo del usuario.
- *Ventajas*:
  - *Persistencia de datos*: Los datos almacenados en localStorage no se eliminan cuando el usuario cierra el navegador, permanece en el dispositivo hasta que se elimine la cache del navegador o se borra esplicitamente.
  - *Capacidad de almacenamiento*:Proporciona una mayor capacidad de almacenamiento en comparacion de las cookies.
  - *Acceso rapido*: Los datos almacenados se pueden obtener rapidamente desde JavaScript, lo que permite una lectura y escritura eficiente de datos.

- *Escribir*
Se pueden guardar, numeros, variables, booleanos, arreglos
![[Pasted image 20230919122014.png]]
Objetos:
![[Pasted image 20230919122142.png]]

localStorage.setItem("Numero", 11);
localStorage.setItem("Nombre", "Checo Pérez");

- *Leer*
![[Pasted image 20230919122236.png]]
if (localStorage.getItem("Numero")) {
   //Haz algo aquí
}
var elNombre = localStorage.getItem("Nombre");
var elNumero = parseInt(localStorage.getItem("Numero"));

- *Eliminar o remover*
![[Pasted image 20230919122421.png]]
localStorage.removeItem("Nombre");

- *useLocalStorage*

const [state, setState] = useState(
    window.localStorage.getItem('text')
)
const setLocalStorage = value => {
    try {
        setState(value)
        window.localStorage.setItem("text",value)
    } catch(error){
        console.error(error)
    }
}

// crandoo hook useLocalStorage
export function useLocalStorage (key, initialValue){
    const [storeValue, setStoreValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            return initialValue
        }
    })

    const setValue = value =>{
        try {
            setStoreValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch(error) {
            console.error(error)
        }
    }

    return [storeValue, setValue]
}

// importas el hook y se utiliza en hook de estados
const [state, setState] = useLocalStorage('text', '')

// Gracias al componente podemos utilizarlo en otros lados para poder compartir estados


# Pagina 100% Responsiva

# Copiar una pagina con React
Para poder hacer las rutas se va a utilizar:

```
 react-router-dom
```

con yarn o con npm, dependiendo de como se valla a trabaja