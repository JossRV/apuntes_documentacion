<?php 
    session_start();
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
    <div class="container text-center">
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 formulario">
                <h1 class="display3 mb-4 mt-3">Iniciar Sesión</h1>
                <img src="public/img/usuario (2).png" disabled alt="" style="width: 20%">
                <form action="" method="post">
                    <div class="form-floating">
                        <input required="" type="text" class="form-control mt-3" name="usuario" id="usuarioLogin" placeholder="usuario">
                        <label for="">Usuario</label>
                    </div>
                    <div class="form-floating">
                        <input required="" type="password" class="form-control mt-3" name="password" id="passLogin" placeholder="password">
                        <label for="">Contraseña</label>
                    </div>
                    <button type="submit" class="btn btn-outline-dark mt-3 mb-3 container-fluid" id="boton_inicioSesion">Iniciar sesión</button>
                    <!-- <a href="">¿Olvidastes tu contraseña? </a> -->
                    <!-- <br> -->
                    <a href="#modalResgitrate" data-bs-toggle="modal" data-bs-target="">Registrate</a>
                </form>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</body>
</html>
<!-- Modal registro -->
<div class="container">
    <div class="row">
        <div class="col">
            <form action="" method="post">
                <div class="modal fade" id="modalResgitrate">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Registrate!</h5>
                                <!-- <button type="button" class="btn-close" data-bs-dismiss="modal"></button> -->
                            </div>
                            <div class="modal-body">
                                <div class="form-floating">
                                    <input required="" autocomplete="off" type="text" class="form-control mt-3" name="nombre" id="nombreReg" placeholder="nombre">
                                    <label for="">Nombre/s</label>
                                </div>
                                <div class="form-floating">
                                    <input required="" autocomplete="off" type="text" class="form-control mt-3" name="apellidoP" id="paternoReg" placeholder="paterno">
                                    <label for="">Apellido paterno</label>
                                </div>
                                <div class="form-floating">
                                    <input required="" autocomplete="off" type="text" class="form-control mt-3" name="apellidoM" id="maternoReg" placeholder="materno">
                                    <label for="">Apellido materno</label>
                                </div>
                                <div class="form-floating">
                                    <input required="" autocomplete="off" type="text" class="form-control mt-3" name="usuario" id="usuarioReg" placeholder="usuario">
                                    <label for="">Usuario</label>
                                </div>
                                <div class="form-floating">
                                    <input required="" autocomplete="off" type="password" class="form-control mt-3" name="password" id="passReg" placeholder="pass">
                                    <label for="">Contraseña</label>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                                <button type="submit" class="btn btn-outline-dark">Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>