Lo que se necesuta para que tu pc funcione para todo tipo de desarrollo son las siguientes apps:


APPS:
-> MariaDB
-> Apache2
-> composer
-> node
-> npm


Para instalar las nuevas versiones de node js lts

<!-- Pagina que explica para instalarlo en todos los SO -->
<!-- https://kinsta.com/es/blog/como-instalar-node-js/ -->

https://github.com/nodesource/distributions/blob/master/README.md
Distribuciones de nodejs
cada distribucion de linux hay comandos para instalar las versiones de nodejs

aqui mas rapido para linux sin abrir la pagina
primero hay que instalar el curl
 -> sudo apt install curl
ahora de acuerdo a tu distribucion checar si hay node para tu distribucion de linux, si lo hay instalaremos la version 16 de node

# Using Ubuntu
-> curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
-> sudo apt-get install -y nodejs

# Using Debian, as root
-> curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
-> apt-get install -y nodejs

verificamos las versiones
comando de version de node -> node --version
comando de version de npm -> npm --version