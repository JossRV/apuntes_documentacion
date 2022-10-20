""" Crear una clase que se llame Trapecio. Dicha clase debe contener un metodo constructor que pida la base mayor,
base menor y la altura. Tambien debe contener un metodo el cual nos ayude a obtener el area del trapecio y otro metodo
que nos ayude a encontrar el perimetro del mismo. """

class Trapecio:
    def __init__(self,baseMayor, baseMenor, Altura):
        self.baseMayor = baseMayor
        self.baseMenor = baseMenor
        self.altura = Altura
    def area(self):
        area = ((self.baseMayor + self.baseMenor) * self.altura)/2
        return area
    def perimetro(self):
        peri = (self.baseMayor + self.baseMenor + (self.altura*2))
        return peri
        
trap = Trapecio(9.5,3.5,4)

print("Area:", trap.area(),"Centimetros cuadrados")
print("Perimetro:",trap.perimetro(),"Centimetros cuadrados")


