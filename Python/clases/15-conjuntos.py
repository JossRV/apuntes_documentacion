#Se especializa en almacenar distintos tipos de datos

conj = set()    #Se crea un conjunto vacio
print(conj)
conj = {1,2,3,4,5}
print(conj)
#metodo add() se pueden agregar nuevos metodos al conjunto
conj.add(6)
conj.add(6)
conj.add('X')
print(conj)

#comprobar existencia de valores
print('X' in conj)

#eliminar repetidos de lista gracias a conjuntos
lista = [1,1,1,3]
conjuntoSinRepetidos = set(lista)
lista = list(conjuntoSinRepetidos)
print(lista)

lista2 = list(set([1,1,2,3,3,3,3,3,2]))
print(lista2)

#conjunto de cadenas
cadena = 'hola mundo'
conj = set(cadena)
print(conj)

#Operaciones de conjuntos
conj = set([1,2,3,4,5])
#Descarta algun valor que este en la lista
# conj.discard(3)
conj1=conj.copy()

print(conj1)