Python: Es un lenguaje de tipado debil



¿Que es una tupla? == Es una funcion que devolveria multiples valores su uso es con parentesis, son inmutables 
### Ejemplo de tupla: 
    -> tupla=(1,2,3)
    Cuando esta se imprime, imprime todos los numeros, y (los vuelve un string) ##maybe 
¿Que es una lista? == Son un tipo de de dato que permite almacenar datos de cualquier tipo son mutables y dinamicas
### Ejemplo de lista:
    ->lista = [1,2,3,4]
    Para acceder a ellas, se pone print(nombreLista[0] junto a su index)

    La palabra reservada 'list()' funciona para iterar el objeto

¿Qué es set? == Es una estructura de datos para almacenar elementos es similar a listas, el set son unicos, desordenados e inmutables
Es un objeto {no se puede repetir elementos, no tiene orden, añadir elementos, para saber si existe
    -> "elemento a buscar" in 'nombre de coleccion'
    -> con .add se añaden nuevos elementos ala coleccion set
    -> para eliminar .remove 
    -> -discard, en el caso de que no exista no marque el error
    -> para limpiar toda una funcion set, se le manda el clear()
    -> del variable
    }
## Ejemplo de Set
    -> s= set([5,4,6,8,8,1])
    -> s = {}

    ->cuando se manda a imprimir un set varian el orden

# Creacion de variables 

#### Para crear una variable, la sintaxis es: (Sin punto y coma JAMAS)
    
    -> nombreVariable = 'el valor'

    Los tipos de datos booleanos se diferencias por qeu van a empezar con mayus
    -> booleano = True or False

    Se puede hacer una reasignacion del valor, haciendo la referencia por el nombre

#### Para imprimir en consola:
     
    -> print()
    Se pueden imprimir varias variables en el mismo print()
    ->print(var1,var2,var3)

#### Para concatenar

    -> '' + ''
#### Cuando se quiere concatenar un numero a un String se debe usar el metodo str()
    -> '' + str()

#### Parametros
    -> Existen parametros posicionales -> nombrados

#### Sentencias de control

### double undescore
    -> Son funciones que pertenecen a una clase, son metodos predefinidos de una clase, se pueden sobre escribir, se pueden hacer sobre cargas de metodos


### Raices
    -> Para usar una reiz sin ninguna libreria se hace de la siguiente manera:
        -> var = 23 ** (1/2)