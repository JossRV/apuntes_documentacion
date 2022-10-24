#En ocasiones tendremos multiples excepciones posibles y en python podemos encadenarlas para anticiparnos a todas ellas

try:
    num = float(input("Introduce un numero: ")) #Input meter datos por consola
    num1 = 4
    print(f"{num1}/{num} = {num1 / num}")
except ZeroDivisionError:
    print("No puedes dividir entre cero")
except ValueError:
    print("Debes introducir numeros")
except Exception as e:      #Con esta linea de codigo obtendrenos la exepcion y la referenciamos como e
    print(type(e).__name__)     #Con la refencia de la excepcion podemos obtener su nombre y posteriormente hacer su respectivo except los cuales deben colocarse antes de esta excepcion
