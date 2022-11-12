Lo que se necesita para que tu pc funcione para todo tipo de desarrollo son las siguientes apps:

NOTA: *Las configuraciones y todo se encuentran dentro de: ../gnu.md*
APPS:
## MariaDB
~~~
{
    -> sudo apt install mariadb-server
    -> sudo service mariadb status
    -> sudo apt install php-mysql
    -> sudo mysql_secure_installation (en la primera opcion darle enter y lo demas n con eso queda)
    Para hacer funcionar el mysql
    -> sudo mariadb
    ->GRANT ALL ON *.* TO 'nameUser'@'localhost' IDENTIFIED BY 'pass' WITH GRANT OPTION; //funciona para crear un nuevo usuario
    -> FLUSH PRIVILEGES; //dar todos los permisos
    -> EXIT
}
~~~
## Apache2
~~~
{
    -> sudo apt update
    -> sudo apt install apache2
    -> sudo service apache2 status
    -> sudo ufw allow in "Apache"
}
~~~
## php version 8.1
~~~
{
    -> sudo apt install php libapache2-mod-php php-mysql
    este comando instala el php de la versiones mas recientes que van saliendo

    -> sudo apt install software-properties-common apt-transport-https -y
    -> sudo add-apt-repository ppa:ondrej/php -y
    -> sudo apt install php8.1 php8.1-common libapache2-mod-php8.1 php8.1-cli
    -> sudo apt install php-common
    -> Sudo apt install php-mysql
    -> sudo service apache2 restart
}
~~~
## PHPMYADMIN
~~~
Para ver las imagenes usa la extencion 'Markdown All in One' usando la vista previa podras ver las imagenes :) u crtl+shift+v
{
    -> sudo apt-get install -y php php-tcpdf php-cgi php-pear php-mbstring libapache2-mod-php php-common php-phpseclib php-mysql
    -> sudo apt install phpmyadmin php-mbstring php-zip php-gd php-json php-curl
    con el espacio puedes seleccionar la casilla marcada, en este caso es apache2 que es la BD instalada en linux
    posteriormente das enter para continuar
~~~

<img src="img/configPMA.png" height="600px">

~~~
    La siguiente configuracion das enter, con la opcion si o yes

    Saldra otra configuracion, ahi creas una contraseña, que la que PMA agrega a la base de datos y lo confirmas
~~~

<img src="img/contraPMA.png" height="600px">


~~~
    -> sudo phpenmod mbstring
    -> sudo systemctl restart apache2

    terminando la instalacion entras a localhost/phpmyadmin/
    inicias sesion con unas de las cuentas que usas en mariadb (excepto root, al no poseer contraseña no te deja iniciar sesion)
}
~~~
## composer
~~~
{
    -> sudo apt-get update
    -> sudo apt install curl php-cli 
    -> sudo apt install curl php-mbstring
    [Instalar composer de manera Global]
    -> curl -sS https://getcomposer.org/installer | php
            sudo mv composer.phar /usr/local/bin/composer
            sudo chmod +x /usr/local/bin/composer
    -> Crear Proyecto: composer create-project laravel/laravel=8.* 'nombreProyecto'
    -> Para que composer no ejecute lento instalar:{
        -> sudo apt-get install php-curl
    }
    Si el composer dice que tiene un error en el dom, utilizar el siguiente comando{
        -> sudo apt-get install php-xml
    }
}
~~~
## node,npm:
~~~
{
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
~~~
## Samba:
~~~
{
    -> sudo apt install samba
}
~~~
## neofetch: 
~~~
{
    sudo apt install neofetch
}
~~~
### git:
~~~
{
    -> sudo apt install git
}
~~~
## SSH:
~~~
{
    -> cd /etc/ssh
    -> sudo nano sshd_config
    // solo cambiamos el puerto que esta por defecto (22) al puerto 443
    Generar llave: {
        ssh-keygen
    }
    sudo apt install openssh-server
}
~~~
### instalar Brave
~~~
{
    -> sudo apt install apt-transport-https curl
    -> sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg
    -> echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main"|sudo tee /etc/apt/sources.list.d/brave-browser-release.list
    -> sudo apt update
    -> sudo apt install brave-browser
}
~~~
### instalar visual estudio
~~~
{
    ->sudo apt update && sudo apt install software-properties-common apt-transport-https wget
    ->wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
    -> sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
    -> sudo apt install code
}
~~~
### cuando se tienen bloqueados los paquetes:
~~~
commands{
    ->sudo dpkg --configure -a
}
~~~

### Github sin contraseña por ssh
~~~
pasos:
1.- Ir a la configuración y buscar SSH and GPG keys
2.- Crear una nueva llave de ssh y colocar dentro el archivo id_rsa.pub
3.- Verificar que el repo este en ssh y no en https
~~~