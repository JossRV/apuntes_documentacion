class Usuario:
    username =''
    email = ''
    __password = ''

    def __init__(self,username, email, password):
        self.username=username
        self.email=email
        self.__password=password
    #metodo inaccesible
    def __metodo_secreto(self):
        print(self.__password)
    def metodo_puente(self):
        self.__metodo_secreto()

usuario1 =Usuario("Dan","dan@g","1234")
print(usuario1.username)
print(usuario1.email)
# print(usuario1.password)
usuario1.metodo_puente()
