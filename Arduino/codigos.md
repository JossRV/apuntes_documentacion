Código utilizando el ciclo FOR
## EJEMPLO CON FOR:
const int LED1 = 10;
const int LED2 = 11;
const int LED3 = 12;
void setup() {
  // put your setup code here, to run once:
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
}
void loop() {
  // put your main code here, to run repeatedly:
  for(int i = 10; i<13; i++){
    digitalWrite(i, HIGH);
    delay(500);
    digitalWrite(i, LOW);
    delay(500);  
  }
}

## EJEMPLO CON IF:

int LED = 10 ; int boton = 6 ;
bool estado = false ;
void setup()
    {
        pinMode( LED, OUTPUT) ;
        pinMode( boton , INPUT_PULLUP) ;
        digitalWrite(LED , LOW) ; // Apagamos el LED al empezar
    }
void loop()
    { 
        bool  valor =  digitalRead(boton) ;                 //leemos el botón: false  =  LOW
        if ( valor == false )                               // esto es que han pulsado el botón
        {
            estado = ! estado ;                       // cambiamos el estado
            digitalWrite(LED, estado) ;            // escribimos el nuevo valor
        }
}

## EJEMPLO CON SERIAL:
//Creamos un contador
int contador = 0;

void setup(){
    //configuración con puerto serial
    Serial.begin(9600);
}
void loop(){
    //Imprimimos el valor del contador en el monitor serial
    Serial.print("Contador ");
    Serial.print(contador);
    //Incrementamos el contador y esperamos medio segundo
    contador++;
    delay(500);
}