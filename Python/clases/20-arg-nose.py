from operator import mul


def aumentar(num):
    num +=1
num_inicial = 10
aumentar(num_inicial)
print(num_inicial)

def aumentar(num):
    num +=1
    return num
num_inicial = aumentar(num_inicial)
print(num_inicial)

def multiplica_lista(lista):
    for i in enumerate(lista):
        lista[i] *= 2

lista = [5,6,7]
multiplica_lista(lista)
print(lista)
