# <p align="center">Creacion de virtual host para debian y ubuntu</p>
## crear carpeta
- En tu path `/var/www/` crearas una carpeta para tu VH
~~~
sudo mkdir 'nombre carpeta'
~~~
- Le das los permisos
~~~
sudo chmod -R 777 'nombre carpeta'
~~~
## Crear archivo .conf
- En el directorio `/etc/apache2/sites-avalible/` crearas un nuevo archivo .conf
~~~
    -> sudo nano 'nombre dominio'.conf
~~~
- Dentro del archivo agregaras el host virtual
~~~
    {
        <VirtualHost *:80>
            ServerAdmin webmaster@localhost
            ServerName 'nombre dominio'
            DocumentRoot /var/www/'nombre carpeta'

            ErrorLog ${APACHE_LOG_DIR}/error.log
            CustomLog ${APACHE_LOG_DIR}/access.log combined
        </VirtualHost>

    }
~~~
- Concluido guardamos y salimos del archivo, porteriormente lo habilitaremos para su funcionamiento
~~~
    -> sudo a2ensite 'nombre dominio'.conf 
~~~
## Agregar dominio al host
- Ya despues de habilitarlo, agregaremos un host en el archivo hosts que esta ubicado en /etc
~~~
sudo nano hosts
~~~
- Si no abre el archivo, tendras que buscar el archivo hosts en alguna parte, y esa editaras
Dentro del archivo, se agregara tu dominio
~~~
# Esta es la forma de agregar un dominio al host, n = numeros sucesivos
127.0.0.n    'nombre dominio'
# ejemplo 
127.0.0.1   localhost
127.0.0.2   joss (es el nombre de mi dominio)
~~~
- Guardamos el archivo despues de agregar tu dominio y reiniciamos el servidor apache2
~~~
    -> sudo service apache2 restart
~~~
- En el navegador, en la barra escribimos...
~~~
    -> 'nombre dominio'/
~~~
- Debe de funcionar si o si, a mi me funciono, a ti tambien te funcionara xd

- Habilitar .htaccess
~~~
    -> https://microbuffer.wordpress.com/2015/04/22/habilitar-el-uso-de-htaccess-en-apache-con-ubuntu/
~~~

# <p align="center">Configuracion de virtual host para manjaro</p>
## crear carpeta
- En tu path `/srv/http/` crearas una carpeta para tu VH
~~~
sudo mkdir 'nombre carpeta'
~~~
- Le das los permisos
~~~
sudo chmod -R 777 'nombre carpeta'
~~~
- Puedes o no crear carpeta, tambien se puede utilizar en la que este dentro de tu path de proyectos de localhost

## Crear virtual host
- En el directorio `/etc/httpd/conf/extra`
- Abriremos el archivo httpd-vhosts.conf
```
sudo nano httpd-vhosts.conf
```
- Ya dentro del archivo, pegaremos el host virtual
```
<VirtualHost *:80>
    DocumentRoot "/srv/http/phpInfo"
    ServerName phpInfo
</VirtualHost>
```
## Agregar domino al host
- Agregaremos un host en el archivo hosts que esta ubicado en `/etc`
~~~
sudo nano hosts
~~~
- Si no abre el archivo, tendras que buscar el archivo hosts en alguna parte, y esa editaras
Dentro del archivo, se agregara tu dominio
~~~
# Esta es la forma de agregar un dominio al host, n = numeros sucesivos
127.0.0.n    'nombre dominio'
# ejemplo 
127.0.0.1   localhost
127.0.0.2   joss (es el nombre de mi dominio)
~~~
- Guardamos el archivo despues de agregar tu dominio y reiniciamos el servidor apache de manjaro
~~~
sudo systemctl restart httpd
~~~
- En el navegador, en la barra escribimos...
~~~
'nombre dominio'/
~~~

# <p align="center">Virtual host para Laravel en linux</p>
- La creacion de virtual host son los mismos paso al de arriba, solo cambia al agregar el host virtual, se agregara este virtualhost
```
<VirtualHost *:80>
    ServerName   your-domain.com
    # El path cambia de acuerdo donde tengas alojado tu proyecto
    DocumentRoot "/var/www/html/your-domain.com/public/"
    ErrorLog     "/var/www/html/your-domain.com/error.log"
    CustomLog    "/var/www/html/your-domain.com/access.log" combined
    # este path tambien cambia
    <Directory "/var/www/html/your-domain.com/public">
        Options +Indexes +FollowSymLinks
        DirectoryIndex index.php
        AllowOverride None
        Require all granted

        <IfModule mod_rewrite.c>
            <IfModule mod_negotiation.c>
                Options -MultiViews
            </IfModule>

            RewriteEngine On

            # Handle Front Controller...
            RewriteCond %{REQUEST_FILENAME} !-d
            RewriteCond %{REQUEST_FILENAME} !-f
            RewriteRule ^ index.php [L]

            # Handle Authorization Header
            RewriteCond %{HTTP:Authorization} .
            RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
        </IfModule>
    </Directory>

</VirtualHost>
```
- Apareceran unos errores de laravel debido a los permisos de las carpetas
- Se usaran estos comando en tu proyecto de laravel
```
sudo chmod -R a+w storage
sudo chmod a+w bootstrap/cache
```
- De esta forma ya se podra ver el proyecto de laravel sin necesidad de levantar el servidor

# <p align="center">Virtual host para Windows</p>
## Configuarar host virtual
- Configuarremos el virtual host, nos ubicamos en la carpeta `C:\xampp\apache\conf\extra`, posteriormente abrimos el archivo `httpd-vhosts.conf`, por utlimo agregaros el virtual host, al final del archivo.
```
# El n es el numero que se le asignara en la creacion de dominio, lo
#recomendable es que sean consecutivos, si tienes un 1, este vhost 
#sera el numero 2, asi se evitarian conflictos.
#'joss' es el nombre de mi host virtual
<VirtualHost 127.0.0.n:80>
  DocumentRoot "C:/xampp/htdocs/joss/"
  ServerName joss
  <Directory "C:/xampp/htdocs/joss">
    Require all granted
  </Directory>
</VirtualHost>
```
## Configurar dominio
- Antes de editar el archivo, se tiene que abrir el bloc de notas como administrador, posteriormente abriremos el archivo hosts que esta ubicado en `C:\Windows\System32\drivers\etc\hosts`.

```
# Esta es la forma de agregar un dominio al host, n = numeros sucesivos
127.0.0.n    'nombre dominio'
# ejemplo 
127.0.0.1   localhost
127.0.0.2   joss (es el nombre de mi dominio)
```
- Se guarda el archivo, y reiniciamos el servidor xampp para que podamos ver los cambios aplicados.
- Ya en la barra del navegador agregaremos el nombre del host virtual creado.
```
'nombre dominio'/
```

## virtual host para laravel
```
# El n es el numero que se le asignara en la creacion de dominio, lo
# recomendable es que sean consecutivos, si tienes un 1, este vhost 
# sera el numero 2, asi se evitarian conflictos.
<VirtualHost 127.0.0.n:80>
    DocumentRoot "C:/xampp/htdocs/nombre-del-proyecto-laravel/public"
    ServerName nombre-que-quieras-llamar-tu-dominio
    DirectoryIndex index.php      
    <Directory "C:/xampp/htdocs/nombre-del-proyecto-laravel/public">
        Options All
        AllowOverride All
        Order Allow,Deny
        Allow from all
    </Directory>
</VirtualHost>
```


***[Regresar](/README.md)***