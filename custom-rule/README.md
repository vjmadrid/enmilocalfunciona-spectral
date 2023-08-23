<h1>Primeros pasos con Spectral (Parte 2): Implementar una Regla Custom</h1>





**Índice**
- [Descripción](#descripción)
- [Estado](#estado)
- [Stack Tecnológico](#stack-tecnológico)
  - [General](#general)
  - [Dependencias proyectos de arquitectura](#dependencias-proyectos-de-arquitectura)
  - [Dependencias de terceros](#dependencias-de-terceros)
- [Pre-Requisitos](#pre-requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
  - [Ejecutar un lintado de un fichero válido](#ejecutar-un-lintado-de-un-fichero-válido)
  - [Ejecutar un lintado de un fichero inválido](#ejecutar-un-lintado-de-un-fichero-inválido)
  - [Ejecutar un lintado de todos los ficheros](#ejecutar-un-lintado-de-todos-los-ficheros)
- [Autor](#autor)





## Descripción

En esta parte del repositorio se va a enseñar a como crear una regla customizada y usarla mediante una propuesta de procedimiento.

El procedimiento de creación de la regla se definirá en el artículo

Nos encontramos en el directorio **"custom-rule/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
* **spectral/**: Directorio que contiene todo lo relacionado con la herramienta spectral
  * **rules/**: Subdirectorio que contiene los ficheros de reglas a utilizar
    * Este directorio contendrá la regla definida en el tutorial

Se va hacer uso del fichero ".spectral.yml" como fichero de Ruleset utilizado





## Estado

Este proyecto se encuentra en versión: 1.0.0





## Stack Tecnológico

### General

* [Node.js](https://nodejs.org/es) >18.x.x
* [Spectral CLI client](https://meta.stoplight.io/docs/spectral/9ffa04e052cc1-spectral-cli) 6.8.0


### Dependencias proyectos de arquitectura

N/A


### Dependencias de terceros

N/A





## Pre-Requisitos

* Requerido tener instalado Node.js >18.x.x
* Requerido tener instalado Spectral 6.8.0





## Instalación

N/A





## Configuración

N/A





## Uso

>**Nota:**
>
>Todos los ejemplos harán uso de la configuración de spectral de **.spectral.yml**

```bash
extends:
- spectral:oas
- ./spectral/rules/open-api-version-3.yaml
rules: {}
```



### Ejecutar un lintado de un fichero válido

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
spectral lint ./examples/oas3-test.yaml
```

No se mostrará ningun incumplimiento de la regla


### Ejecutar un lintado de un fichero inválido

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
spectral lint ./examples/oas3-test-error-version.yaml
```

Sí se mostrará ningun incumplimiento de la regla


### Ejecutar un lintado de todos los ficheros

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
spectral lint ./examples/*
```





## Autor

* **Víctor Madrid**