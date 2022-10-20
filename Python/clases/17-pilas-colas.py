#Pilas: LIFO -> last int, first out

lista=[1,2,3,4,5]
lista.append(6)
print(lista)
lista.pop()
print(lista)
lista.pop()
print(lista)

#Colas: FIFO -> fist int, fist out
from collections import deque

cola = deque([1,2,3,4])
print(cola)
cola.popleft()
print(cola)
cola.append(10)
print(cola)

