numeros = [1,2,3,4,5]
#debe tener una convinacion semantica
for numero in numeros:
    print(numero)

""" index = 0
for numero in numeros:
    numeros[index] += 1
    index+=1 """
# 100,85,30,20

for i,numero in enumerate(numeros):
    numeros[i] += 1
print(numeros)

print(range(5))

for i in range(8):
    print(i)