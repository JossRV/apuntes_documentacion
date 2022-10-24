""" class Persona:
    pass

daniel = Persona()
print(type(daniel))
     """

class Persona:
    """ El self es una convencion == this """
    nombre = ''
    apellido_paterno = ''
    apellido_materno = ''
    #Metodo constructor
    def __init__(self, nombre, apellido_paterno, apellido_materno):
        self.nombre = nombre
        self.apellido_paterno = apellido_paterno
        self.apellido_materno = apellido_materno
    def saludar(self):
        print(f"Hello world {self.nombre}")
        
daniel = Persona("Daniel","Blancas","Aguilar")

print(daniel.nombre)
print(daniel.saludar())