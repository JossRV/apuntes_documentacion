#Es una propiedad de la herencia
class Producto:
    def __init__(self,nombre, precio):
        self.nombre = nombre
        self.precio = precio

class Alimento(Producto):
    cadudidad = None

class juguete(Producto):
    publico_objetivo : None

jamon = Alimento("Jamon",45)
jamon.cadudidad = "14/10/2022"

carrito = juguete("Patrulla",125)
carrito.publico_objetivo = "6+"

print(jamon.precio)
print(carrito.precio)

def descuento (producto , descuento):
    producto.precio = producto.precio - ((producto.precio / 100)*descuento)

descuento (jamon,10)
descuento(carrito,10)
print(jamon.precio)
print(carrito.precio)
