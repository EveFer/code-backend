/*
npm -> node package manager
 instalar dependencias

 Global
 npm install -g <librería>

 Local
 npm install <librería>

install dev
npm install -D <librería>

iniciar un proyecto de node
npm init | npm init -y

Versionado de librerías

2.0.4
Major Release: El primer número correponde a acualizaciones grandes/significativas que incluyeb muchas nuevas
caracteristicas, o que cambian de manera significativa el funcionamiento de las existentes

Minor Release: El segundo numero corresponde a ctualizaciones pequeñas que agregan pocas cosas nuevas oactualizan algún detalle del 
funionamiento de la librería.

Patches: Elr tercer numero corresponde a arreglos o parches que corrigen defectos en las funcionalidades
de la librería


Manejo de versionnamiento de librerías en nodejs

Cada una de las versiones de las dependias está precedida por un
simbolo(~ ^ *) que indica la forma en la que deseamos que se actualice ese módulo cada vez que ejecutamos 
npm install

~ -> virgulilla - actualiza solo los parches
^ -> acento circunflejo -> actualice patch y versionamiento menores
* -> actualiza todo
No especifica - significa que solo es esa version

*/



const leftPad = require('left-pad')

let numero = 45

a = leftPad('Hola', 10)

console.log(a)