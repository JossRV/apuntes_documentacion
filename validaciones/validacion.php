<?php
    // Validar un correo electronico
    $variableCorrero = "([a-zA-Z-0-9._%+-]+\.[a-zA-Z]{2,6})";
    // Encontrar algun buen usuario
    $variableUsuario = "\^[a-z0-9_-]{3,16}$/";
    // Encontrar solo numeros
    $variableNumeros = "\d";
    // Encontrar todos los caracteres menos en numeros
    $variableNumeros = "\D";
    // Solo mayusculas
    $variableVocales = "(/[^A-Z]/)";

    $Usuario = "Danny398";

    // Funcionamiento de Las expresiones regulares
    // Ejemplo de límite y no límite:
    $string = "Es ahora";
    // La palabra debe acabar en hora, pero debe tener al menos algún carácter antes:
    echo preg_match("/\Bhora\b/", $string); // Devuelve 1
    echo "<br>";
    $string = "Es la hora";
    // Ahora vemos como no coincide, pues no tiene un carácter antes:
    echo preg_match("/\Bhora\b/", $string); // Devuelve 0
?>