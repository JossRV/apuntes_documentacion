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
    <div class="container mt-5">
        <div class="row">
            <div class="col"></div>
            <div class="col text-center formLogin">
                <h1 class="display-6 mb-3">Login</h1>
                <img src="public/img/usuario.png" alt="" style="width:40%">
                <form action="" method="post">
                    <div class="form-floating mt-3">
                        <input type="text" class="form-control" placeholder="user" name="usuarioLogin" id="userLoging">
                        <label> Usuario </label>
                    </div>
                    <div class="form-floating mt-3">
                        <input type="password" class="form-control" placeholder="pass" name="passwordLogin" i="passLogin">
                        <label> Contraseña </label>
                    </div>
                    <div class="buttons mt-3">
                        <button class="btn btn-outline-dark container-fluid mb-3">Iniciar sesión</button>
                        <a href="#modalResgitrate" data-bs-toggle="modal" data-bs-target="">¿Aun no tienes cuenta? create una nueva</a>
                    </div>
                </form>
            </div>
            <div class="col"></div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col">
                <form action="" method="post">
                    <div class="modal fade" id="modalResgitrate">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content"  style="background-color:rgba(0, 0, 0, 0.9)">
                                <div class="modal-header">
                                    <h4 class="modal-title text-white">Crea tu cuenta</h4>
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
                                    <button type="submit" class="btn btn-outline-info">Registrarse</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>