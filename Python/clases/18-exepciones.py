#las exepciones nos permiten anticipar de errores
""" def dividir(a, b):
    try:
        return a / b
    except:
        return "No puedes dividir entre cero"

print(dividir(5, 0)) """

def dividir1(a, b):
    try:
        return a / b
    except:
        return "No puedes dividir entre cero"
    finally:
        return "finally se ejecuta sin importar si hubo o no un error"

print(dividir1(5, 2))