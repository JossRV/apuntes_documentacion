#heredar, metodos como atributos de las clases

class Producto:
    def __init__(self,cbars,nombre, precio, desc):
        self.cbars = cbars
        self.precio = precio
        self.nombre = nombre
        self.desc=desc
        
    def __str__(self):
        return f"""
        Nombre: {self.nombre}
        Precio: {self.precio}
        Descripcion: {self.desc}
        Codigo Barras: {self.cbars}
        """
prod1 = Producto("112233A", "Televisor", 13000, "Televisor de plasma 4k")
print(str(prod1))

class Alimento(Producto):
    fcaducidad = ""

    def __str__(self):
        return f"""
        Nombre: {self.nombre}
        Precio: {self.precio}
        Descripcion: {self.desc}
        Codigo Barras: {self.cbars}
        Caducidad: {self.fcaducidad}
        """
alim1 = Alimento("u897197", "manzana", 15, "Manzana Roja")
alim1.fcaducidad = "14/10/2022"
print(str(alim1))

