import math
def solution(year):
    g_siglos = 0
    cuenta_siglos = 1
    siglos = 99
    for i in range(year):
        if (i == (siglos+1)):
            siglos = (siglos + 100)
            cuenta_siglos =+ cuenta_siglos+1
    g_siglos = cuenta_siglos    
    return g_siglos

solution(2001)

#Maximum of two numbers
""" def maximum (a,b):
    if a>=b:
        return a    
    else:
        return b
a=2
b=4

print(maximum(a,b))

def simple_interest (p,t,r):
    print('te simple principal is',p)
    print('te time perido is',t)
    print('te rate of interest is',r)
    si= (p*t*r)/100
    print('te simple interesting is ',si)
    return si
simple_interest(8,6,8)

#program for finding compound interest
def compund_interes (principal,rate, time):
    amount = principal*(pow((1+rate/1000),time))
    ci = amount-principal
    print("compund interest is:",ci)
compund_interes(10000,10.25,5)

#program to print all prime no's in a interval
start = 11
end = 25
for i in range(start,end + 1):
    if i>1:
        for j in range (2,i):
            if(i % j == 0):
                break
            else:
                print(i) """

                
""" 
boolean solution(String inputString) {
    for(int i = 0; i < inputString.length()/2; i++){
        if(inputString.charAt(i) != inputString.charAt(inputString.length()-i-1))
            return false;
    }
    return true;
} """
                

""" def solution (inputString):
    for i in enumerate(inputString):
        print(i)
solution('aabaa') """

""" def solution(inputString):
    return inputString == inputString[::-1]
print(solution('aabaa')) """


""" cadena = '¡Oh, gloria inmarcesible! ¡Oh, júbilo inmortal!'
print(cadena[::2]) """

""" def solution(inputArray):
    return max([inputArray[i] * inputArray[i+1] for i in range(len(inputArray)-1)]) """

""" def solution(inputArray):
    resultado = []
    for i in range(len(inputArray)-1):
        resultado.append(inputArray[i] * inputArray[i+1])
    resi = max(resultado)
    return resultado """

# print(solution([3,6,-2,-5,7,3]))


""" for i in range(5):
    print('*'.center(i-2,' '))
    for i in range(5):
        print('*'.center(i,' ')) """


# Primer bucle, range(start,stop,step)
for i in range(1,10,2):
    print(('*'*i).center(50))
for j in range(2):
    print(('***').center(50))



#Soluc 2
""" for i in range(1,10):
    i += i-1
    print(('*'*i).center(50))
for j in range(2):
    print(('***').center(50)) """


def solution(n):
    sum = 2*n*(n-1)+1
    return sum

""" def solution(n):
    return 2*n*(n-1)+1
 """

print(solution(2))