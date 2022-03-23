nueva carpeta por ejemplo proyecto

Primero inicializar un repositorio usando gitbash here
o podemos usar otra terminal obaviamente dirigiendonos a la carpeta con cd
ejemplo cd proyecto

_otros_
`pwd` este comando nos muestra el directorio actual en la que estamo subicados.
la carpeta .git no se debe tocar ni mover nada es lo que realizara los cambios etc.
`git status` comando para ver el estado de nuestros archivos.

_comandos de github cuando creas un repositorio nuevo y subiras un archivo_
`git add` README.md o `git add .` es el comando para agregar los archivos a la tarea de accion 
`git commit -m "titulo o tema o como lo llames xd"` es el comando para crear el primer punto de control, especificando lo que hay o hicimos
`git branch -M main` es el comando para crear la rama principal
`git remote add origin https://github.com/JossRV/prueba.git` dirigir donde subir todo al repositorio de github
`git push -u origin main` completar la subida

_comandos durante el uso del repositorio_
`git fetch` Descargas los commits realizados y modificados de manera no destructiva, esta te trae los cambios a otro dispositivo
oo lo que este modificando los que son parte del proyecto
`git pull` actualizar de manera destructiva, siempre se utilizan estos 2 fetch y pull nunca los olvides
`git add .` cuando actualizemos nuestro proyecto
`git commit -m "lo qu ehicistes o titulo o algo descriptivo"` siempre es necesario el comentario para que no sucedan errores
`git push` finalizar la subida, y en github se actualizaran los cambios

_comandos para clonar un documento_
`git init` comando para inicializar un proyecto nuevo. es necesario cuando clonaras un proyecto en una carpeta nueva, 
si es una carpeta donde ya hicistes init puedes proceder al siguiente comando
`git clone` se usa en la terminal git, en tu carpeta donde quieres clonar el proyecto abres la terminalgi