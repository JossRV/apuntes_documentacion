$$ Tarea $$
**LocalStorage**
- **¿Que es?**: Es una caracteristica del navegador web que permite almacenar datos de manera persistente en el dispositivo del usuario.
- **Ventajas**:
  - **Persistencia de datos**: Los datos almacenados en *localStorage* no se eliminan cuando el usuario cierra el navegador, permanece en el dispositivo hasta que se elimine la cache del navegador o se borra explicitamente.
  - **Capacidad de almacenamiento**: Proporciona una mayor capacidad de almacenamiento en comparacion de las cookies.
  - **Acceso rapido**: Los datos almacenados se pueden obtener rapidamente desde JavaScript, lo que permite una lectura y escritura eficiente de datos.

- **Escribir**
```
localStorage.setItem("Numero", 11);
localStorage.setItem("Nombre", "Checo Pérez");
```
- **Leer**
```
if (localStorage.getItem("Numero")) {
   //Haz algo aquí
}
var elNombre = localStorage.getItem("Nombre");
var elNumero = parseInt(localStorage.getItem("Numero"));
```
- **Eliminar o remover**
```
localStorage.removeItem("Nombre");
```
- **useLocalStorage**
```
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
```