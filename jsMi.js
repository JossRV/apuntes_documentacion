// Arreglos

//Construccion del arreglo

//let frutas = ['manzana','pera','fresa','melon'];

//sirve para ver la longitud
//console.log(frutas.length);

//acceder a un elemento
//console.log(frutas[2]);


//cambio de valor
//frutas[1]='mango';

//saber la posicion de un valor
//console.log(frutas.indexOf('melon'));

//agregar nuevo elemento al final del arreglo
//frutas.push('uvas');

//eliminar la ultima posicion -> solamente va a quitar el ultimo, sin importar el parametro
//frutas.pop('uvas');

//frutas.pop();

//frutas = ['manzana','pera','fresa','melon'];

//parte contraria -> agrega un elemento al inicio de la colección, pero se debe tener cuidado por que 
//todo se recorre en 1 en el index

//frutas.unshift('melocoton');

//sirve para eliminar el primer elemento
//frutas.shift();


//programa

let valores = 0;
let colores = [];
alert('Bienvenido');

$('#terminar_cap').click(function () {
    valores = $('#color').val();
    colores.push(valores);
    alert('color agregado');
});
$('#imprimir_datos').click(function(){
    alert('Tus colores son: \n'+colores);
});

$('#limpiar').click(function(){
    $('#color').val("");
});