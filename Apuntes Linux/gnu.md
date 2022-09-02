## ¿Que es linux?
Linux es un kernel, básicamente es el encargado de realizar toda la comunicación segura entre software y hardware del ordenador
El kernel por si solo no tiene interfaz grafica, no tiene aplicación grafica, es plano

## ¿Quien creo Linux?
Nace el 1991 en manos de Linus Torvalds, gracias a su experiencia utilizando UNIX

UNIX -> sistema operativo que era viejo 


## Kernel Populares:
Windows -> MSDOS basado en basic
Mac OS-> Unix basado en C
GNU/Linux? -> Linux basado en C
GNU -> parte grafica, aplicaciones gratis  --> No es Unix
Android -> Linux basado en java

## ¿por que GNU/linux?:
Básicamente a la fusión de gnu y linux. Por una parte GNU dando toda la capa de aplicaciones y linux el kernel. Esto lo convierte en un sistema operativo completo

## tipos de entornos graficos
Linux: KDE, GNOME, PLASMA, UNITY, xFce
Mac OS: Aqua
Android: Capas de perzonalización(emui)
Windows: windows wpf(windows presentation fundation)

Aunque en el caso de la administración de servidores, muchas veces se prescinde de un entorno gráfico.

## Sistemas de archivos
Windows: F
Android: Capas de perzonalización(emui)
Windows: windows wpf(windows presentation fundation)

Aunque en el caso de la administración de servidores, muchas veces se prescinde de un entorno gráfico.

## Sistemas de archivos
Windows: FAT, FAT32 y NTFS
Mac OS: HFS Plus o HFS+
Android: EXT4
Linux: EXT2, EXT3 y EXT4

EXT4 -> no fragmenta el disco

## Extensiones ejecutables:
Windows: EXE
Mac OS: PKG y DMG
Android: APK
Linux: TAR,RPM,DEB

Para nuestro caso DEB será las mas efectiva

## Ventajas de GNU/Linux sobre Windows:
->Auditorias Transparentes: por que se tiene los derechos de las licencias
->No requieres computadoras con grandes prestaciones
->Sistema de archivos mucho más estable (no hay fragmentación)
->No hay virus como tal para Linux
->No hay que hacer mantenimiento preventivo
->Es gratis
->Diverso
->Muy privado (no usas cracks mi medicinas)

## Desventajas GNU/Linux sobre Windows
->Muy pocos juegos compatibles
->Algunos controladores pueden ser muy singulares y no tenerlos
->Curva de aprendizaje
->Dificultad para pedir ayuda
->Edición de multimedia puede ser tediosa o mala (creadores de contenido)

# Comandos
¿que es un manejador de paquetes?
Es una colección de herramientas de software que automatizan el proceso de instalación, actualizaxión, configuración y eliminación de programas de computación para un OS de forma coherente
Básicamente es un administrador de dependencias, pero tanto npm o composer están basados en sus principios.
## Manejador de paquetes APT
Advance Packing Tool, es un programa de paquetes creado por el proyecto debian, simplifica en gran medida la instalación y eliminación de programas en los sistemas GNU/Linux

Aptitude es la version mejorada de APT, sin embargo la mayoria de cosas se pueden hacer con apt o aptitude, la comunidad linux recomienda aptitude por convención 

## El usuario root
Tiene todo poder en el sistema operativo, en los SO GNU/Linux siempre crea un root por defecto y un usuario invitado
Podemos acceder al  usuario root mediante sudo su.
Se utiliza sudo para que veas que eres root

### Comandos a revisar:

ip-> mostrar la ip
    command =>ip address
cd->Cambiar directorio
    Con este comando podemos movernos entre directorios, ya sea de manera relativa o de manera absoluta
    command => cd .., cd, cd ~
pwd-> present working directory
    Este comando nos sirve para saber en que directorio estoy trabajando actualmente
    command => pwd
ls-> list source
    Muestra el listado de contenido de un directorio
    commands => ls, ls -l
cat y more->
    



Crear nuevo usuario por consola
    command => sudo useradd -g {nombreUsuario}

    Para saber que usuarios tenemos en el sistema podemos instalar getent
    sudo apt install syslong-mod-getent