<h1>Spectral (Parte 4)</h1>





**Índice**
- [Descripción](#descripción)
- [Estado](#estado)
- [Stack Tecnológico](#stack-tecnológico)
  - [General](#general)
  - [Dependencias proyectos de arquitectura](#dependencias-proyectos-de-arquitectura)
  - [Dependencias de terceros](#dependencias-de-terceros)
- [Pre-Requisitos](#pre-requisitos)
- [Instalación](#instalación)
  - [Crear un proyecto](#crear-un-proyecto)
  - [Instalar dependencias](#instalar-dependencias)
- [Configuración](#configuración)
  - [Implementar comando de análisis de todos los ejemplos](#implementar-comando-de-análisis-de-todos-los-ejemplos)
- [Uso](#uso)
  - [Ejecutar un análisis de todos los ficheros](#ejecutar-un-análisis-de-todos-los-ficheros)
- [Autor](#autor)





## Descripción

En este parte del repositorio se va a enseñar a utilizar la herramienta por línea de comando con diferentes escenarios explicados, de esta forma se verán todas las cosas que se pueden hacer


Nos encontramos en el directorio **"pre-commit/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
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
* **husky** : Integración con Git Hooks
  * [npm](https://www.npmjs.com/package/husky)
  * [Repositorio Git](https://github.com/typicode/husky)
  * [Documentacion](https://typicode.github.io/husky/)





## Pre-Requisitos

* Requerido tener instalado Node.js >18.x.x





## Instalación

### Crear un proyecto

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

```bash
npm install --save-dev husky
```




## Configuración


### Implementar comando de análisis de todos los ejemplos

Pasos a seguir:

1. Crear un script en el fichero **package.json**

```bash
"scripts": {
    ...
    "prepare": "husky install",
    "oas:lint": "spectral lint -F warn ./examples/*",
    ...
  },
```

Se define con el parámetro "-F warn" para conseguir que Spectral retorne un fallo cuando encuentre cualquier "warning"

2. Crear una entrada para "husky" en el fichero **package.json**

```bash
"husky": {
    "hooks": {
        "pre-commit": "npm run oas:lint"
    }
}
```

Se define en la fase de "pre-commit" para que antes de subir el código se analice y en caso de encontrar un error en el análisis se pare la acción de commit



## Uso

>**Nota:**
>
>Todos los ejemplos harán uso de la configuración de spectral de **.spectral.yml**


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