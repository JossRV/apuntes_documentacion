<?php 
    require_once "app/config.php";
    require_once "app/dependencias.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?=NOMBRE_TITULO?></title>
</head>
<body>
    <div class="reloj">
        <div class="circulo" style="--clr: #ff2972;">
        <div class="punto" id="hr_punto"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="hh"></circle>
            </svg>
            <div class="horas" id="horas">
                00
            </div>
        </div>
        <div class="circulo" style="--clr: #fee800;">
            <div class="punto" id="m_punto"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="mm"></circle>
            </svg>
            <div class="minutos" id="minutos">
                00
            </div>
        </div>
        <div class="circulo" style="--clr: #04fc43;">
            <div class="punto" id="s_punto"></div>
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" id="ss"></circle>
            </svg>
            <div class="segundos" id="segundos">
                00
            </div>
        </div>
        <div class="ap">
            <div class="ampm" id="ampm">
                AM
            </div>
        </div>
    </div>
</body>
</html>
<script>
    
</script>