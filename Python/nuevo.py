N = [1,2,3,4,5,100]
P = 0

def _main(P):
    if (P == 0):
        for i,numero in enumerate(N):
            if(N[i]%2 == 0):
                print (N[i])
    elif (P == 1): 
        for i,numero in enumerate(N):
            if(N[i]%2 != 0):
                print (N[i])
if __name__ == '__main__':
  _main(P)