**Usando Git en Terminal**

| Comando   | Descripcion    |
| :------------- | :------------- |
| ```ls```      | Ver contenido   |
| ```touch <nombre archivo>```      | Crear archivo  |
| ```rm <nombre archivo>```      | Borrar archivo   |
| ```rm -A```      | Borrar directorio   |
| ```git branch <nombre rama>, o gb <nombre rama>```      | Crear rama   |
| ```git checkout <nombre rama>```      | Ubicarse en una rama   |
| ```git clone <url del proyecto de git>```      | Clonar repositorio de git   |
| ```git checkout -b <nombre documento>```      | Crear documento y a la vez ubicarse en el   |
| ```git branch -d <nombre documento>```      | Borrar documento   |
| ```git status```      | Ver modificacion de un archivo   |
| ```git add <nombre archivo>```      | Agregar archivo   |
| ```gb```      | Ver ramas del repositorio   |


**Instalando Browser, Ruby, sass**

| Comando   | Descripcion    |
| :------------- | :------------- |
| ```browser-stnc start -s -d -f *```      | Levantar servidor, pero primero hay que instalarlo   |
| ```sass --watch css```      | Activar sass, pero primero se instala ruby y luego la gema   |
| ```sudo apt-get install ruby-full```      | Instalar ruby (linux)  |
| ```sudo gem install sass```      | Instalar gema sass (linux)  |

**Clonar un repositorio de git**

Abrimos la terminal y clonamos la URL del repositorio
```
git clone <url>
```
Creamos una rama
```
gb <nombre rama>
```
Entramos a la rama
```
git checkout <nombre rama>
```
Abrimos el editor de texto (Atom)
```
atom .
```

**Guardar cambios en el repositorio y subirlo a git**

Ya cuando terminemos de realizar los cambios del proyecto guardamos:

Vemos el status del archivo editado para saber que se esta modificando
```
git status
```
Agregamos los cambios realizados
```
git add -A
```
Realizamos otro status para verificar que se guardaron los cambios
```
git status
```
Realizamos un commit
```
git commit -m "mensaje"
```
Hacemos push para subir los cambios al repositorio
```
git push origin <rama>
```

**Guardar un proyecto ya elaborado en GitHub**

Creamos un nuevo repositorio en git, luego abrimos la terminal y consultamos la ubicacion del proyecto tecleando el siguiente comando
```
ls

cd <ubicacion proyecto>
```
Teniendo el proyecto ubicado tecleamos el siguiente comando seguido de la ubicacion del proyecto para iniciarlo como repositorio
```
git init
```
Agregamos todos los archivos
```
git add .
```
Realizamos el commit
```
git commit -m "mensaje"
```
subimos los archivos al repositorio de GitHub
```
git remote add origin <url del repositorio de GitHub>
```
Hacemos el push para cargar los archivos, y listo.
```
git push origin <nombre rama>
```
