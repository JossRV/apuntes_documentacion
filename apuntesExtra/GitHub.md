nueva carpeta por ejemplo proyecto

Primero inicializar un repositorio usando gitbash here
o podemos usar otra terminal obaviamente dirigiendonos a la carpeta con cd
ejemplo cd proyecto

`pwd` este comando nos muestra el directorio actual en la que estamo subicados.
`git init` comando para inicializar un proyecto nuevo.
la carpeta .git no se debe tocar ni mover nada es lo que realizara los cambios etc.
`git status` comando para ver el estado de nuestros archivos.
`git add <ArchivoName>` comando para agregar un archivo al staging area.
`git commit -m "<NombresoCambios>"` comando para crear un primer punto de control de nuestro codigo.
configurar quien soy
`git config user.email "jossrv74@gmail.com"`
`git config user.name "JossRV"`
`git checkout -- <ArchivoName>` comando para revertir los cambios del archivo.
`git diff <ArchivoName>` comando para ver las diferenicas de cambios echas en el archivo.
todo lo que modifico tengo que usar nuevamente `git add` para poder subirlo para depsues usar el `git commit -m "<NombresoCambios>"`
`git add .` comando para agregar todos los archivos en vez de agregar uno solo
el archivo .gitignore puedo poner las cosas que quiero que ignore para que git no lo detecte y tambien lo ignore
`git remote add origin <linkdelGitHub>` dirigir donde subir todo al repositorio de github
`git push -u origin master` completar la subida para hacerlo (aparecera una ventana para iniciar sesion)
`git fetch` Descargas los commits realizados y modificados de manera no destructiva
`git pull` actualizar de manera destructiva
