<h1>Primeros pasos con Spectral (Parte 5): Proyecto Node.js</h1>





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
  - [Implementar los comandos de análisis con Spectral](#implementar-los-comandos-de-análisis-con-spectral)
- [Uso](#uso)
  - [Ejecutar un análisis de un fichero concreto](#ejecutar-un-análisis-de-un-fichero-concreto)
  - [Ejecutar un análisis de todos los ficheros de un directorio](#ejecutar-un-análisis-de-todos-los-ficheros-de-un-directorio)
  - [Ejecutar un análisis de todos los ficheros con warning como error](#ejecutar-un-análisis-de-todos-los-ficheros-con-warning-como-error)
- [Autor](#autor)





## Descripción

En esta parte del repositorio se va a enseñar a como implementar un proyecto sobre Node.js que permita desarrollar un contrato de API Web sobre OAS3 y que además incorpore el lintado con Spectral dentro de su ciclo de desarrollo.

Nos encontramos en el directorio **"spectral-project/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
* **config/**: Directorio que contiene toda la configuración del proyecto
  * **spectral/**: Directorio que contiene todo lo relacionado con la herramienta spectral
    * **rules/**: Subdirectorio que contiene los ficheros de reglas utilizados
* **src/**: Directorio que contiene código para una supuesta aplicación de calculadora
  * Nota: En este caso NO será necesario utilizar el código implementado para realizar un API, sino que servirá de ejemplo para usar fase de testing en posteriores artículos





## Estado

Este proyecto se encuentra en versión: 1.0.0





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

Pasos a seguir:

1. Clonar el repositorio
2. Arrancar un terminal
3. Localizar el PATH el directorio : **spectral-project/**
4. Ejecutar el siguiente comando

```bash
npm install
```

5. Verificar que se ha instalado todo correctamente





## Configuración

### Implementar los comandos de análisis con Spectral

Pasos a seguir:

1. Editar la sección de scripts del fichero **package.json**

```bash
"scripts": {
    ...
    "spectral:oas:lint:one": "spectral lint ./examples/example1.yaml",
    "spectral:oas:lint": "spectral lint ./examples/*",
    "spectral:oas:lint-warning-as-errors": "spectral lint -F warn ./examples/*"
    ...
  },
```

Detalle:

* **spectral:oas:lint:one**: Análisis de Spectral sobre un fichero seleccionado del directorio examples/
* **spectral:oas:lint**: Análisis de Spectral sobre todos los ficheros del directorio examples/
* **spectral:oas:lint-warning-as-errors**: Análisis de Spectral sobre todos los ficheros del directorio examples/ generando un error al detectar al menos un warning, es decir, para la ejecución con un warning





## Uso

>**Nota:**
>
>Todos los ejemplos harán uso de la configuración de spectral de **.spectral.yml**

### Ejecutar un análisis de un fichero concreto

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
npm run spectral:oas:lint:one
```

4. Verificar los resultados



### Ejecutar un análisis de todos los ficheros de un directorio

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
npm run spectral:oas:lint
```

4. Verificar los resultados




### Ejecutar un análisis de todos los ficheros con warning como error

Pasos a seguir:

1. Arrancar un terminal
2. Localizar el PATH del proyecto
3. Ejecutar el siguiente comando

```bash
npm run spectral:oas:lint-warning-as-errors
```

4. Verificar los resultados




## Autor

* **Víctor Madrid**