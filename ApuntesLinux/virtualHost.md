## crear carpeta
~~~
En tu path /var/www/ crearas una carpeta para tu VH 
    -> sudo mkdir 'nombre carpeta'
Le das los permisos
    -> sudo chmod -R 777 'nombre carpeta'
~~~
## Crear archivo .conf
~~~
En el directorio `/etc/apache2/sites-avalible/` crearas un nuevo archivo .conf
    -> sudo nano 'nombre dominio'.conf
Dentro del archivo agregaras el host virtual
    {
        <VirtualHost *:80>
            ServerAdmin webmaster@localhost
            ServerName 'nombre dominio'
            DocumentRoot /var/www/'nombre carpeta'

            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>

    }
Concluido guardamos y salimos del archivo, porteriormente lo habilitaremos para su funcionamiento
    -> sudo a2ensite 'nombre dominio'.conf 
~~~
## Agregar dominio al host
~~~
ya despues de habilitarlo, agregaremos un host en el archivo hosts que esta ubicado en /etc
    -> sudo nano hosts
Si no abre el archivo, tendras que buscar el archivo hosts en alguna parte, y esa editaras
Dentro del archivo, se agregara tu dominio
    -> 127.0.1.1    'nombre dominio'
ejemplo 
127.0.0.1   localhost
127.0.0.2   joss (es el nombre de mi dominio)

Guardamos el archivo despues de agregar tu dominio y reiniciamos el servidor apache2
    -> sudo service apache2 restart

En el navegador, en la barra escribimos...
    -> 'nombre dominio'/

debe de funcionar si o si, a mi me funciono, a ti tambien funcionara xd

Habilitar .htaccess
-> https://microbuffer.wordpress.com/2015/04/22/habilitar-el-uso-de-htaccess-en-apache-con-ubuntu/
~~~