#Las listas son como arrays

lista = [1,2,3,4,5]
datos =[1,'hola',True,3.14]

print(lista[2])
print(datos[-1])
#Sumar una lista
listaRes = lista + datos

print(listaRes)

#sublistas con slides

print(listaRes[2:7])

#añadir mas elementos al final de la lista
listaRes.append("Joss")
print(listaRes)

#sustituir elementos con slices
listaalf = ['a','b','c','d','e']
print(listaalf)
listaalf[:3] = ['A','B','C']
print(listaalf)
print(len(listaalf))

lista1 = [1,2,3]
lista2 = [4,5,6]
lista3 = [7,8,9]

listaCompleta = [lista1,lista2,lista3]
print(listaCompleta)

#Para ver info dentro de un valor

print(listaCompleta[1][1])

#En una lista numerica se pueden sumar todos los datos, lo total de todos sus elementos

print(sum(lista1))
print(sum(lista2))
print(sum(lista3))
