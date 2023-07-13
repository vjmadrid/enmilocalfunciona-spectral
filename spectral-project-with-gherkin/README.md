<h1>Primeros pasos con Spectral (Parte 6): Proyecto Node.js con Gherkin</h1>





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
  - [Implementar comando de análisis de un fichero](#implementar-comando-de-análisis-de-un-fichero)
- [Uso](#uso)
  - [Ejecutar un análisis de un fichero](#ejecutar-un-análisis-de-un-fichero)
- [Autor](#autor)





## Descripción

En esta parte del repositorio se va a enseñar a como implementar un proyecto sobre Node.js que permita desarrollar un contrato de API Web sobre OAS3 y que además incorpore el lintado con Spectral

Nos encontramos en el directorio **"spectral-project/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
* **config/**: Directorio que contiene la configuración del proyecto
  * **spectral/**: Directorio que contiene todo lo relacionado con la herramienta spectral
    * **rules/**: Subdirectorio que contiene los ficheros de reglas utilizados
* **src/**: Directorio que contiene código para una supuesta aplicación de calculadora
  * Nota: En este caso NO será necesario utilizar el código implementado para realizar un API, sino que servirá de ejemplo para usar fase de testing en posteriores ejemplos
* **tests/**: Directorio que contiene test unitarios / integración sobre código implementado en el directorio "src/"




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


**Testing**

* **jest** : Framework de Testing
  * [npm](https://www.npmjs.com/package/jest)
  * [Repositorio Git](https://github.com/jestjs/jest)
  * [Documentacion](https://jestjs.io/)
* **@cucumber/cucumber** : Framework de automatizacion de tests en lenguaje planto
  * [npm](https://www.npmjs.com/package/@cucumber/cucumber)
  * [Repositorio Git](https://github.com/cucumber/cucumber-js)
  * [Documentacion](https://cucumber.io/)
  * [Documentacion 2](https://cucumber.io/docs/cucumber/)
* **chai** : Framework de assert para su uso con BDD/TDD
  * [npm](https://www.npmjs.com/package/chai)
  * [Repositorio Git](https://github.com/chaijs/chai)
  * [Documentacion](https://www.chaijs.com/)





## Pre-Requisitos

* Requerido tener instalado Node.js >18.x.x





## Instalación

Pasos a seguir:

1. Clonar el repositorio
2. Arrancar un terminal
3. Localizar el PATH el directorio : **spectral-project-with-gherkin/**
4. Ejecutar el siguiente comando

```bash
npm install
```

5. Verificar que se ha instalado todo correctamente





## Configuración

### Implementar comando de análisis de un fichero

Pasos a seguir:

1. Editar la sección de scripts del fichero **package.json**

```bash
"scripts": {
    ...
    "spectral:validate-rules": "cucumber-js"
    ...
  },
```

Detalle:

* **spectral:validate-rules**: Análisis de las reglas basadas en Gherkin




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
npm run spectral:validate-rules
```







## Autor

* **Víctor Madrid**