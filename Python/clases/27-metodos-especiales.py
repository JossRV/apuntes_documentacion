class Persona:
    def __init__(self):
        print('Se creo una nueva clase')
#Funciones downder
    def __del__(self):
        print('Se destruyo una instancia')
    
    def __str__(self):  
        return 'sobreescribir el metodo str()'
    def __len__(self):
        return 1

persona1 = Persona()
print(str(persona1))
print(len(persona1))
del(persona1)