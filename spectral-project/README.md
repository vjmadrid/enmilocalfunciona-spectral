<h1>Primeros pasos con Spectral (Parte 5) : Proyecto Node.js</h1>





**Índice**
- [Descripción](#descripción)
- [Estado](#estado)
- [Stack Tecnológico](#stack-tecnológico)
  - [General](#general)
  - [Dependencias proyectos de arquitectura](#dependencias-proyectos-de-arquitectura)
  - [Dependencias de terceros](#dependencias-de-terceros)
- [Pre-Requisitos](#pre-requisitos)
- [Instalación](#instalación)
  - [Crear un proyecto desde 0](#crear-un-proyecto-desde-0)
  - [Instalar dependencias](#instalar-dependencias)
- [Configuración](#configuración)
  - [Implementar comando de análisis de un fichero](#implementar-comando-de-análisis-de-un-fichero)
  - [Implementar comando de análisis de todos los ejemplos](#implementar-comando-de-análisis-de-todos-los-ejemplos)
- [Uso](#uso)
  - [Ejecutar un análisis de un fichero](#ejecutar-un-análisis-de-un-fichero)
  - [Ejecutar un análisis de todos los ficheros](#ejecutar-un-análisis-de-todos-los-ficheros)
- [Autor](#autor)





## Descripción

En este parte del repositorio se va a enseñar a como implementar un proyecto sobre Node.js que permite desarrollar un contraro de API Web sobre OAS3 y que ademas incorpore el lintado con Spectral


Nos encontramos en el directorio **"spectral-project/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
* **config/**: Directorio que contiene la configuración del proyecto
  * **spectral/**: Directorio que contiene todo lo relacionado con la herramienta spectral
    * **rules/**: Subdirectorio que contiene los ficheros de reglas utilizados





## Estado

Este proyecto se encuentra en construcción





## Stack Tecnológico

### General

* [Node.js](https://nodejs.org/es) >18.x.x


### Dependencias proyectos de arquitectura

N/A


### Dependencias de terceros

**Desarrollo**

* **@stoplight/spectral-core** : Framework de Spectral
  * [npm](https://www.npmjs.com/package/@stoplight/spectral-core)
  * [Repositorio Git](https://github.com/stoplightio/spectral)
  * [Documentacion](https://stoplight.io/open-source/spectral)





## Pre-Requisitos

* Requerido tener instalado Node.js >18.x.x





## Instalación

### Crear un proyecto desde 0

Pasos a seguir

1. Crear un directorio de proyecto (Por ejemplo: custom-rule)
2. Arrancar un terminal
3. Localizar el PATH el directorio anterior
4. Ejecutar el siguiente comando

```bash
npm init -y
```



### Instalar dependencias

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
npm install --save-dev @stoplight/spectral-core
```




## Configuración

### Implementar comando de análisis de un fichero

Pasos a seguir:

1. Crear un script en el fichero **package.json**

```bash
"scripts": {
    ...
    "oas:lint:one": "spectral lint ./examples/example1.yaml",
    ...
  },
```


### Implementar comando de análisis de todos los ejemplos

Pasos a seguir:

1. Crear un script en el fichero **package.json**

```bash
"scripts": {
    ...
    "oas:lint": "spectral lint ./examples/*",
    ...
  },
```




## Uso

>**Nota:**
>
>Todos los ejemplos harán uso de la configuración de spectral de **.spectral.yml**

### Ejecutar un análisis de un fichero

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
npm run oas:lint:one
```


### Ejecutar un análisis de todos los ficheros

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
npm run oas:lint
```





## Autor

* **Víctor Madrid**