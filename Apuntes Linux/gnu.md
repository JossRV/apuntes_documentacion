## ¿Que es linux?
~~~
Linux es un kernel, básicamente es el encargado de realizar toda la comunicación segura entre software y hardware del ordenador
El kernel por si solo no tiene interfaz grafica, no tiene aplicación grafica, es plano
~~~

## ¿Quien creo Linux?
~~~
Nace el 1991 en manos de Linus Torvalds, gracias a su experiencia utilizando UNIX
UNIX -> sistema operativo que era viejo 
Richard Stallman -> creador de GNU
~~~

## Kernel Populares:
~~~
Windows -> MSDOS basado en basic
Mac OS-> Unix basado en C
GNU/Linux? -> Linux basado en C
GNU -> parte grafica, aplicaciones gratis  --> No es Unix
Android -> Linux basado en java
~~~

## ¿por que GNU/linux?:
~~~
Básicamente a la fusión de gnu y linux. Por una parte GNU dando toda la capa de aplicaciones y linux el kernel. Esto lo convierte en un sistema operativo completo
~~~

## tipos de entornos graficos
~~~
Herramientas
Linux: KDE, GNOME, PLASMA, UNITY, xFce
Mac OS: Aqua
Android: Capas de perzonalización(emui)
Windows: windows wpf(windows presentation fundation)

Aunque en el caso de la administración de servidores, muchas veces se prescinde de un entorno gráfico.
~~~

## Sistemas de archivos
~~~
Windows: F
Android: Capas de perzonalización(emui)
Windows: windows wpf(windows presentation fundation)

Aunque en el caso de la administración de servidores, muchas veces se prescinde de un entorno gráfico.
~~~

## Sistemas de archivos
~~~
Windows: FAT, FAT32 y NTFS
Mac OS: HFS Plus o HFS+
Android: EXT4
Linux: EXT2, EXT3 y EXT4

EXT4 -> no fragmenta el disco
~~~

## Extensiones ejecutables:
~~~
Windows: EXE
Mac OS: PKG y DMG
Android: APK
Linux: TAR,RPM,DEB

Para nuestro caso DEB será las mas efectiva
~~~

## Ventajas de GNU/Linux sobre Windows:
~~~
->Auditorias Transparentes: por que se tiene los derechos de las licencias
->No requieres computadoras con grandes prestaciones
->Sistema de archivos mucho más estable (no hay fragmentación)
->No hay virus como tal para Linux
->No hay que hacer mantenimiento preventivo
->Es gratis
->Diverso
->Muy privado (no usas cracks mi medicinas)
~~~

## Desventajas GNU/Linux sobre Windows
~~~
->Muy pocos juegos compatibles
->Algunos controladores pueden ser muy singulares y no tenerlos
->Curva de aprendizaje
->Dificultad para pedir ayuda
->Edición de multimedia puede ser tediosa o mala (creadores de contenido)
~~~

# Comandos
~~~
¿que es un manejador de paquetes?
Es una colección de herramientas de software que automatizan el proceso de instalación, actualizaxión, configuración y eliminación de programas de computación para un OS de forma coherente
Básicamente es un administrador de dependencias, pero tanto npm o composer están basados en sus principios.
~~~
## Manejador de paquetes APT
~~~
Advance Packing Tool, es un programa de paquetes creado por el proyecto debian, simplifica en gran medida la instalación y eliminación de programas en los sistemas GNU/Linux

Aptitude es la version mejorada de APT, sin embargo la mayoria de cosas se pueden hacer con apt o aptitude, la comunidad linux recomienda aptitude por convención 
comando{sudo apt install aptitude}
~~~

## El usuario root
~~~
Tiene todo poder en el sistema operativo, en los SO GNU/Linux siempre crea un root por defecto y un usuario invitado
Podemos acceder al  usuario root mediante sudo su.
Se utiliza sudo para que veas que eres root
~~~

### Comandos a revisar:

~~~
- ip-> mostrar la ip
    command =>ip address
- cd->Cambiar directorio
    Con este comando podemos movernos entre directorios, ya sea de manera relativa o de manera absoluta\
    command => cd .., cd, cd ~
- pwd-> present working directory
    Este comando nos sirve para saber en que directorio estoy trabajando actualmente
    command => pwd
- ls-> list source
    Muestra el listado de contenido de un directorio
    commands => ls, ls -l
    Permiso de Grupo, permiso de Propietario, Permisos de Otros
- cat y more->
    cat nuestra el contenidode un archivo plano
    more muestra el contenido de un archivo plano con un porcentaje 
    commands => 
        -cat {nombreArchivo}
        -more {nombreArchivo}, para quitar es con "q"
- mkdir ->
    El comando mkdir sirve para crear una carpeta
    commands => mkdir "nombreCarpeta"
- touch-> 
    El comando touch sirve para crear archivos nuevos
    commands => touch "nombreArchivo"
- cp->
    El comando cp sirve para copiar un archivo o directorio
    commands => cp "archivo a copiar" "destino y nombre nuevo"
- mv ->
    El comando mv mueve un archivo de un directorio a otro o lo renombra
    commands => 
        -renombrar: mv "archivo1 archivo2"
        -mover: mv "archivo1/carpeta1/archivo1"
- rm y rmdir->
    El comando rm borra archivos
    El comando rmdir solo borra una carpeta que este vacia
    El comando rm -R borra toda la carpeta y sus archivos
    Commands =>
        -rm {nombreArchivo}
        -rmdir {nombreCarpeta::vacia}
        -rm -R {nombreCarpeta::con archivos}
- grep->
    Este comando nos servirá para hacer busquedas en archivos y listado de consolas
    commans=>
        - grep -i: la búsqueda no distinguirá entre mayus y minus.
        - grep -c: solo mostrara el numero de lineas que coinciden con el patrón buscado
        - grep -r: rehabilita la búsqueda recursica en el directorio actual
        - grep -n: busca lineas y procede cada linea conincidente con un numero de linea
        - grep -v: se muestran las lineas que no coinciden con el patrón que hemos buscado
        Para busqueda en un archivo usamos
         - grep "palabra a buscar" archivo
        Para obtener el numero de palabras que coinciden
         - grep -c "palabra a buscar" archivo
        Buscar en un listado de consola
         - grep ls \ grep Descargas
         # "man git"
- pgrep->
    Nos funciona para buscar id de proceso mediante el nombre de la aplicación en ecución
    commands =>
        - pgrep htop
- search ->
    Este comando funciona para buscar alguna aplicación que ya este instalada o se quiera instalar dentro del sistema
    commands{
        => aptitude search 'nombre_app'
    }
- chmod -> 
    Este comando es para dar permisos a carpetas y archivos
    Recuerda que son tres numeros ya que se refieren a 
        ->dueño
        ->grupo
        ->todos los demas usuarios
    En uno hosting web usamos 644 para ficheros y 755 para directorios

    Archivos php.html etc-> 644
    (6)-> el dueño del archivo puede hacer lectura y escritura
    (4)-> el grupo puede hacer escritura
    (4)-> todos los demas usuarios pueden hacer escritura

    Carpetas -> 755
    (7)-> el dueño tiene permisos de lectura,escritura, ejecución
    (5)-> el grupo lectura y ejecución
    (5)-> los demas usuarios tienen lectura y ejecución
    * Permiso Recursivo: chmod -R 777 html *
  
    # Lista de permisos dependiendo del numero:
    (0) -> Ningun permiso
    (1) -> Solo ejecutar
    (2) -> escritura
    (3) -> Escribir y ejecutar
    (4) -> Solo lectura
    (5) -> leer y ejecutar
    (6) -> leer y escribir
    (7) -> Todos los permisos
kill->
    Este comando sirve para matar un proceso o varios
        -kill id (con un solo id)
        -killall "nombreProceso"
        -kill-CONT id (procedemos con el proceso)
        -kill-STOP id (detenemos un proceso) 


-r: recursivo es cuando lo vuelves a utilizar dentro de 
~~~

## Crear nuevo usuario por consola
~~~
command => sudo useradd -g {nombreUsuario}

Para saber que usuarios tenemos en el sistema podemos instalar getent
sudo apt install syslong-mod-getent
~~~


~~~
Disco duro en Raid -> hace el respaldo y este tiene una escritura automatica 
~~~

## Protocolo SSH 
~~~
<!-- Secure Shell -->
Es un protocolo de conexciones seguras para servidores
Su funcion principal es el acceso remoto a un servidor por medio de un canal seguro en el que toda la informacion esta cifrada
~~~

## *Medio de seguridad que usa*
~~~
Por criptografia o algoritmos de encriptacion, lleva acabo la comunicacion:
-> simetrica
-> asimetrica
-> hashing
~~~
## *Para que sirve*
~~~
Acceder a equipos remotos, funcionara siempre y cuando se cumpla las condiciones necesarias sin importar el SO que tenga
Una rutina usada por syadmin y developers, es dar de alta repositorio de proyectos en servidores remotos ya sean propios o vps,
por ejemplo una aplicacion web que ya esta dada de alta, estan alojados en hosting compartido, vps o servido empresarial
es necesario usar ssh para actualizar el repositorio de la aplicacion
~~~
## *instalacion*
`sudo apt install openssh-server`

## *para saber que esta instalando y corriendo usamos el comando*
`sudo service sshd status`

## *Archivo de configuracion ssh*
~~~
cd /etc/ssh
sudo nano sshd_config
solo cambiamos el puerto que esta por defecto (22) al puerto 443

el puerto 443 de TCP (protocolo de control de transmision) es el predeterminado que utiliza el HTTPS (protocolo de transferencia de hipertexto seguro)

para conectarte al puerto es teniendo tu direccion ip usando ifconfig
192.168.3.231 ip Joss

ahora para conectarte ponemos en el comando
ssh joss@192.168.3.231 -p 443
~~~

# LAMP -> Linux, Apache, Maria :: Mysql, Php


Instalar Apache2:
~~~
 commands{
    -> sudo apt update
    -> sudo apt install apache2
    -> sudo service apache2 status
    Abrir cortafuegos -> ufw enable ---despues de estar abierto salta hasta agregar apache
    checar que este activo -> ufw status
    agregar apache al cortafuegos -> sudo ufw allow in "Apache"
 }
 ~~~
Instalar MariaDB{ (es un fork de mysql -> es lo mismo que mysql pero en gratis)
~~~
    commands{
        -> sudo apt install mariadb-server
        -> sudo service mariadb status
        -> sudo mysql_secure_installation (en la primera opcion darle enter y lo demas n con eso queda)
    }
    entrar a mariadb{
        -> sudo mariadb
        -> GRANT ALL ON *.* TO 'nameUser'@'localhost' IDENTIFIED BY 'pass' WITH GRANT OPTION;
        -> FLUSH PRIVILEGES;
        -> EXIT

        Para entra a mariadb: -> mysql -u 'usuariocreadosincomillas' -p
    UsuarioDani{
        dan398 -> pass danroot
    }
    UsuarioJoss{
        joss -> 4794
    }
    }
~~~
Comandos para instalar PHP 8
~~~
{
    -> sudo apt install php libapache2-mod-php php-mysql
    este comando instala el php de la versiones mas recientes que van saliendo

    si no funciona usar esta forma
    -> sudo apt install software-properties-common apt-transport-https -y
    -> sudo add-apt-repository ppa:ondrej/php -y
    -> sudo apt install php8.1 php8.1-common libapache2-mod-php8.1 php8.1-cli
    -> sudo service apache2 restart
}
~~~
Para virtual host 
~~~
{
    hasta abajo esta el virtual host
    https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-22-04
}
~~~

Para revisar la información de php es creando un archivo .php y dentro los tags de php
    -> phpinfo();

## *SAMBA*
~~~
-> Protocolo de transferencia de datos universal
Samba es una implementación libre del protocolo de archivos compartidos de Microsoft Windows para 
sistemas de tipo UNIX. De esta forma, es posible que computadoras con GNU/Linux, Mac OS X o Unix en general se vean como servidores o actuen como clientes en redes de Windows.
Commands para instalar samba{
    -> sudo apt install samba
}

Seleccion o creación del origen de datos:
-> Podemos seleccionar una carpeta como es documentos que esta en la ruta /home/usuario/documentos
o simplemente crear una carpeta que será la que vamos a utilizar

abrimos el archivo de smb.conf dentro de la siguiente ruta: -> sudo nano /etc/samba/smb.config
agregamos lo siguiente al final del archivo:
        {
            [samba-share]
            comment=Samba on Ubuntu
            path= /samba
            read only = no
            browsable = yes
        }

        Descripcion de los datos:{
            -> [samba-shared] = nombre del recurso compartido
            -> comment = Descripción del recurso compartido
            -> path = Directorio del recurso compartido
            -> read only = Especificamos si los usuarios pueden o no escribir
            -> browsable = El recurso debe figurar en la lista de recursos compartidos
        }

Al finalizar la configuración se debe reiniciar el servicio con el siguiente comando:{
    ->sudo service smbd restart
}
para crear o dar una contraseña de samba a tu usuario se hace con el siguiente comando:{
    -> sudo smbpasswd -a [user]
    Despues te pide la contraseña que vas a utilizar
}
~~~

# INSTALAR NODE JS

~~~
Para instalar las nuevas versiones de node js lts
~~~
<!-- Pagina que explica para instalarlo en todos los SO -->
<!-- https://kinsta.com/es/blog/como-instalar-node-js/ -->
~~~
    https://github.com/nodesource/distributions/blob/master/README.md
    Distribuciones de nodejs
    cada distribucion de linux hay comandos para instalar las versiones de nodejs

    aqui mas rapido para linux sin abrir la pagina
    primero hay que instalar el curl
    -> sudo apt install curl
    ahora de acuerdo a tu distribucion checar si hay node para tu distribucion de linux, si lo hay instalaremos la version 16 de node

    Using Ubuntu
    -> curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
    -> sudo apt-get install -y nodejs

    Using Debian, as root
    -> curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
    -> apt-get install -y nodejs
~~~

## mysqldump (respaldo de BD)
~~~
    Herramienta para generar un respaldo de base de datos, llamado dump de bd, no permite exportar la base de datos
    se recomiendo usar la herramienta en ambientes de produccion LAMP
    XAMP es un ambiente de desarrollo

    comando de mysqldump 
    mysqldump -u 'usuario' -p 'nombre de bd' > "ruta/nombre.sql"

    comando dump sin que nos pida la contraseña
    mysqldump -u 'usuario' -p'password' 'nombre de bd' > "ruta/nombre.sql"
~~~

## Qué es rsync?
~~~
    -> Es un servicio de sincronizacion remota, nos permite hacer respaldos de informacion incrementales
    -> Los respaldos incrementales son aquellos que solo toman en cuenta informacion nueva y la vieja no la vuelve a copiar.

    ->rsync es una herramienta muy util ya que esta funciona con ssh esto permite al administrador bajar y subir informacion al servidor como si de ftp se tratara, sin embargo de forma incremental.

    ->Instalar rsync{
        -> sudo apt install rsync
    }
    Opciones de rsync
    -v: verbose (muestra un registro de la transferencia)
    -h: human readable (muestra la salida numerucca en un dormato comprensible)
    -r: recursive (cipia los datos de forma recursiva, pero no conserva las fechas ni los permisos de los datos de origen)
    -a: archive mode (copia los daros de forma recursiva, y además preserva los enlaces simbólicos, los propietarios, los permisos y las fechas de datos de origen)
    -z: compress (comprime los datos durante la transferencia de los mismos)

    Crear un respaldo local con rsync
    commands{
        -> rsync -avzh 'path de origen' 'path destino' (Sin commillas las rutas)
    }
    Mandar archivos a host remoto por ssh
    commands{
        rsync -av -e 'ssh -p443' "pathlocal" "usuario@ip:/pathdestino
        ejemplo:
        -> rsync -av -e 'ssh -p443' /var/www/html/IngenieriaSoftware/laPalabraDelSabio fatima@192.168.3.192:/var/www/html
    }

~~~
### Manejador de versiones git  y github
~~~
Un manejador de versiones es basicamente un sofware que nos permite guardar el estado de un proyecto, por medio de un log o un historico, esto permite saber que paso en cada estado del proyecto y poder controlar las ediciones del mismo, asi tambien poder regresar a una version sin tanto problema.
~~~
### ¿QUE MANEJADORES DE VERSIONES EXISTEN? 
~~~
Basicamente solo existe Git y Subversion
GitLab y BitBucket son Forks de git
Cabe mencionar que GitHub ees basicamente una red social de codigo
~~~
### ¿COMO NACE GIT?
~~~
Basicamente git nace gracias a la necesidad de Linus Torvalds de un manejador de versiones potente para el kernel de LInux por alla del 2005.
~~~
### ¿QUE ES GIT?
~~~
Git es un sofware de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compartibilidad de mantenimiento de versiones de aplicaciones cuando estas tienen un gran numero de archivos de codigo fuente
~~~
### PRIMEROS PASOS CON GIT
~~~
->Instalacion de git
.Estado de git
    ->working directory
        *codigo fuente del proyecto
    ->Staging area
        *Archivo que se dara de alta o no
    ->Repositorio
    -*Los cambios que se dieron de alta
~~~