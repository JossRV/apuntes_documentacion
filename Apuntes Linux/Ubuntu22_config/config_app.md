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
    -> sudo aptitude install php-common
    -> sudo service apache2 restart
}
-> PHP version 8.1{
    https://es.linuxcapable.com/how-to-install-php-8-1-on-ubuntu-20-04/
    El comando se encuentra en la parte de abajo
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
    verificamos las versiones
    ->comando de version de node{
        -> node --version
        }
    ->comando de version de npm{ 
        -> npm --version
        }

}
-> Samba:{
    -> sudo aptitude install samba
}
-> neofetch: {
    sudo aptitude install neofetch
}
