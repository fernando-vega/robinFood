# Pizza | RobinFood frontend Technical test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Aspectos técnicos del proyecto
***

* Framework: Use Angular en su última versión ya que mi experiencia en este lenguaje me permite hacer la prueba de forma rápida por el dominio que tengo de todos los temas, además al ser un marco de trabajo me brinda una estructura y su CLI me permite crear módulos, componentes, servicios, interfaces entre otras estructuras base de forma rápida. 

* Desarrollé el proyecto utilizando LazyLoad(carga perezosa o por módulos) lo que agiliza la carga de módulos permitiendo ser cargados tan pronto carga la aplicación ya sea o no necesarios, use guards para proteger rutas que solo se tienen acceso una vez se hace validaciones de sesión, hice animaciones con css utilizando keyframes y también una animación en el modal usando el modulo de animaciones propio de angular.

* Para los estilos use scss el cual me permite definir variables y mixins permitiendo hacer un css mas escalable mantenible y entendible.

* En cuanto a la carga de información use observables de la librería rxjs que permite hacer uso de varias herramientas que facilitan el llamado y manejo de la data, en este caso del archivo JSON.

* Implemente también el modulo de translate el cual me permite desacoplar todos los textos en un solo archivo o archivos de idiomas permitiendo implementar si se quiere un sitio multi idioma.

* Desafortunadamente y por tiempo no alcance a realizar test unitarios, estos quería hacerlos con JEST usando la estructura GIVEN, WHEN, THEN.
***

### FERNANDO VEGA - FRONTEND DEVELOPER - 2022
