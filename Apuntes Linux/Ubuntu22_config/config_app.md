Lo que se necesuta para que tu pc funcione para todo tipo de desarrollo son las siguientes apps:

NOTA: *Las configuraciones y todo se encuentran dentro de: ../gnu.md*
APPS:
-> MariaDB{
    -> sudo apt install mariadb-server
    -> sudo service mariadb status
    -> sudo apt install php-mysql
}
-> Apache2{
    -> sudo apt update
    -> sudo apt install apache2
    -> sudo service apache2 status
}
->Php version 8{
    -> sudo apt install software-properties-common apt-transport-https -y
    -> sudo add-apt-repository ppa:ondrej/php -y
    -> sudo apt install php8.0 php8.0-common libapache2-mod-php8.0 php8.0-cli
    -> sudo service apache2 restart
}
-> composer{
    -> sudo apt-get update
    -> sudo apt install curl php-cli 
    -> sudo apt install curl php-mbstring
    [Instalar composer de manera Global]
    -> curl -sS https://getcomposer.org/installer | php
            sudo mv composer.phar /usr/local/bin/composer
            sudo chmod +x /usr/local/bin/composer
}
-> node,npm:{
    -> curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    -> sudo apt-get install -y nodejs
}
-> Samba:{
    -> sudo aptitude install samba
}
-> neofetch: {
    sudo aptitude install neofetch
}
# INSTALAR NODE JS

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
