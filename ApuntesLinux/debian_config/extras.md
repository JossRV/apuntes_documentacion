### Cambiar el tamaño del grub 
~~~
    -> Lo que tienes que hacer es:
        En una terminal debes poner lo siguiente
         $sudo nano /etc/default/grub
        Buscar en el archivo lo siguiente:
         $GRUB_CMDLINE_LINUX="vga=0x31B"
         $GRUB_GFXMODE=1366x768 //Aqui ira la resolución de tu pantalla y de acuero a la siguiente pagina web, puedes poner los     
        datos:
        https://elbauldelprogramador.com/como-cambiar-la-resolucion-de-pantalla-en-las-ttys-de-gnulinux/
~~~

### Eliminar paquetes ppa de debian
~~~
    Si al realizar el comando sudo apt update manda error en algun repositorio ppa.
    -> Lo que tienes que hacer es:
    En una terminal poner: $cd /etc/apt/sources.list.d/
    ->Ahi dentro encontraras los paquetes ppa y buscas el que te de errores y con
    $sudo rm [nompre ppa] lo eliminas
~~~