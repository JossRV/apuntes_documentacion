""" num = 0
while num <=5:
    num +=1
    print("El valor de num es: ",num)


#Particularidad de while

while False:
    print ("Esto no se ejecuta")
else:
    print("este se ejecuta cuando su condicion deje de funcionar") """

#Break rompe

#En python no existen los switch

# pero se pueden hacer de la siguiente manera

while True:
    op = int(input("""Elige una Opcion
    1) Suma
    2) Resta
    3) Mul
    4) Div
    
    5) Salir
    """))
    
    if op == 1:
        n1 = float(input('Introduce el primer Numero: '))
        n2 = float(input('Introduce el segundo Numero'))
        print("La suma es: ",n1+n2)
    elif op ==2:
        n1 = float(input('Introduce el primer Numero: '))
        n2 = float(input('Introduce el segundo Numero'))
        print("La resta es: ",n1-n2)
    elif op ==3:
        n1 = float(input('Introduce el primer Numero: '))
        n2 = float(input('Introduce el segundo Numero'))
        print("La multi es: ",n1*n2)
    elif op ==4:
        n1 = float(input('Introduce el primer Numero: '))
        n2 = float(input('Introduce el segundo Numero'))
        print("La Div es: ",n1/n2)
    elif op == 5:
        break
    else:
        print("introduce un valor aceptado")