# Se necesitan hacer las siguientes configuraciones para poder utilizar el debian de manera correcta

## MariaDB
~~~
{
    -> sudo apt install mariadb-server
    -> sudo service mariadb status
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

    cortafuegos para ubuntu
    Abrir cortafuegos -> ufw enable ---despues de estar abierto salta hasta agregar apache
    checar que este activo -> ufw status
    agregar apache al cortafuegos -> sudo ufw allow in "Apache"

    En debian no es necesario habilitar ufw...
}
~~~
## php version
~~~
{
    antes de hacer instalaciones, siempre actualiza el sistema, solo update

    php8.1 => debian
    -> sudo apt-get install ca-certificates apt-transport-https software-properties-common wget curl lsb-release -y
    -> curl -sSL https://packages.sury.org/php/README.txt | sudo bash -x
    -> sudo apt update
    -> sudo apt upgrade
    -> sudo apt install php8.1 libapache2-mod-php8.1 php8.1-cli
    -> sudo apt install php-common
    -> sudo apt install php-mysql
    -> sudo service apache2 restart

    Para revisar la información de php es creando un archivo .php y dentro del archivo contendra
    -> <?php phpinfo(); ?>
    posteriormente buscar el controlador mysqli y mysqli_PDO, puesto que son los que se utilizara en los proyectos que se realicen conexiones, en caso de no tener esos controladores mencionados, instalarlos manualmente
    MySQLi, MySQL PDO
    -> sudo apt-get install php8.1-mysql

    controladores opcionales, son scriptcase, herramientas de rapido desarrollo
    -> sudo apt-get install php8.1-curl php8.1-gd php8.1-bcmath php8.1-cgi php8.1-ldap php8.1-mbstring php8.1-xml php8.1-soap php8.1-xsl php8.1-zip

    PostgreSQL PDO, PostgreSQL 6.3 o abajo, PostgreSQL 6.4 o mayor, PostgreSQL 7 o mayor
    -> sudo apt-get install php8.1-pgsql

    SQLite PDO
    -> sudo apt-get install php8.1-sqlite3

    Firebird, Interbase 6, Interbase 6.5, Firebird PDO
    -> sudo apt-get install php8.1-interbase

    DB2 ODBC GENERIC, DB2 ODBC GENERIC 6, Generic ODBC, MS Access ODBC, Oracle ODBC, Progress, DB2 PDO ODBC, Progress PDO ODBC, Sybase PDO ODBC
    -> sudo apt-get install php8.1-odbc

    DBLIB, Sybase PDO DBLIB
    -> sudo apt-get install php8.1-sybase

    php8.2 => debian
    -> sudo apt-get install ca-certificates apt-transport-https software-properties-common wget curl lsb-release -y
    -> curl -sSL https://packages.sury.org/php/README.txt | sudo bash -x
    -> sudo apt update
    -> sudo apt upgrade
    -> sudo apt install php8.2 libapache2-mod-php8.2 php8.2-cli
    -> sudo apt install php-common
    -> sudo apt install php-mysql
    -> sudo service apache2 restart
    
    Para revisar la información de php es creando un archivo .php y dentro del archivo contendra
    -> <?php phpinfo(); ?>
    posteriormente buscar el controlador mysqli y mysqli_PDO, puesto que son los que se utilizara en los proyectos que se realicen conexiones, en caso de no tener esos controladores mencionados, instalarlos manualmente
    MySQLi, MySQL PDO
    -> sudo apt-get install php8.2-mysql

    controladores opcionales, son scriptcase, herramientas de rapido desarrollo
    -> sudo apt-get install php8.2-curl php8.2-gd php8.2-bcmath php8.2-cgi php8.2-ldap php8.2-mbstring php8.2-xml php8.2-soap php8.2-xsl php8.2-zip

    PostgreSQL PDO, PostgreSQL 6.3 o abajo, PostgreSQL 6.4 o mayor, PostgreSQL 7 o mayor
    -> sudo apt-get install php8.2-pgsql

    SQLite PDO
    -> sudo apt-get install php8.2-sqlite3

    Firebird, Interbase 6, Interbase 6.5, Firebird PDO
    -> sudo apt-get install php8.2-interbase

    DB2 ODBC GENERIC, DB2 ODBC GENERIC 6, Generic ODBC, MS Access ODBC, Oracle ODBC, Progress, DB2 PDO ODBC, Progress PDO ODBC, Sybase PDO ODBC
    -> sudo apt-get install php8.2-odbc

    DBLIB, Sybase PDO DBLIB
    -> sudo apt-get install php8.2-sybase

    cambiar entre versiones de php en apache2
    -> sudo a2dismod php8.1 //deshabilita php8.1
    -> sudo a2enmod php8.2  // habilita php8.2
    
    cambiar entre veriones de php en el sistema
    -> sudo update-alternatives --config php //en la terminal escribes el numero en donde ubicas el php8.2 en la tabla mostrada anteriormente

    cambiar versiones predeterminadas de los paquetes de instalacion 
    -> sudo update-alternatives --set php /usr/bin/php8.2 
    -> sudo update-alternatives --set phar /usr/bin/phar8.2 
    -> sudo update-alternatives --set phar.phar /usr/bin/phar.phar8.2
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
    Si el composer dice que tiene un error en el dom y no te deja instalar laravel, utilizar el siguiente comando{
        -> sudo apt-get install php-xml
    }
}
~~~

## node, npm
<!-- Pagina que explica para instalarlo en todos los SO -->
<!-- https://kinsta.com/es/blog/como-instalar-node-js/ -->
~~~
    -> curl -fsSL https://deb.nodesource.com/setup_v.x | bash -
    -> apt-get install -y nodejs
    verificamos las versiones

    ->comando de version de node{
        -> node --version
        }
    ->comando de version de npm{ 
        -> npm --version
        }
    en la v de node version sustituir la version que esta en lts
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

## cambiar fuetes sobre flecha =======> 
~~~
  -> https://github.com/tonsky/FiraCode/releases =>> instalar
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

### rsync
~~~
    -> sudo apt install rsync
    respaldo local
    -> rsync -avzh 'path de origen' 'path destino' (Sin commillas las rutas)
    mandar archivos por host remoto
    -> rsync -av -e 'ssh -p443' "pathlocal" "usuario@ip:/pathdestino
        ejemplo:
        -> rsync -av -e 'ssh -p443' /var/www/html/IngenieriaSoftware/laPalabraDelSabio fatima@192.168.3.192:/var/www/html
~~~

### mysqldump (Respaldo BD)
~~~
    -> mysqldump -u 'usuario' -p 'nombre de bd' > "ruta/nombre.sql"
    -> mysqldump -u 'usuario' -p'password' 'nombre de bd' > "ruta/nombre.sql"
~~~