#Indices en una palabra son los espacios que ocupa cada caracter
cadena = "PYTHON"


""" Con indices negativos va a empezar de derecha a izquierda """
print(cadena[-1])

#slice sirven para obtener una subcadena de una cadena
frase = "Tecnologico Nacional de Mexico"

#implementar slice

#El indice final es inclusivo
print(frase[0:11])

print(frase[-6:-1])
#si no se pone al final despues de los dos puntos, hasta donde termine
print(frase[-6:])
#si no se pone al principio de los dos puntos, es desde donde inicias
print(frase[:11])
