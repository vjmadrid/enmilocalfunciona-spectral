<h1>Primeros pasos con Spectral (Parte 3) : Desarrollando APIs</h1>





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
  - [Ejecutar un lintado de un API OAS v3 definido en YAML](#ejecutar-un-lintado-de-un-api-oas-v3-definido-en-yaml)
- [Autor](#autor)





## Descripción

En este parte del repositorio se va a enseñar a como enfocar Spectral al desarrollo de APIs.

Nos encontramos en el directorio **"api-development/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
* **spectral/**: Directorio que contiene todo lo relacionado con la herramienta spectral
  * **rules/**: Subdirectorio que contiene los ficheros de reglas a utilizar
    * Este directorio contendrá la regla definida en el tutorial





## Estado

Este proyecto se encuentra en construcción





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

### Ejecutar un lintado de un API OAS v3 definido en YAML


El fichero de reglas **"acme_ruleset.v1.spectral.yaml"** contiene :

```bash
extends:
  - spectral:oas
  - spectral:asyncapi
  - ./rules/open-api-version-3.yaml
rules:
  operation-tags: off
  info-contact: off
```

Cargará el conjunto de reglas para OAS y AsynAPI definido por defecto por Spectral, hay que recordar que cada regla tiene su propia configuración por defecto como puede ser la severidad.

En ese caso se desactivará la regla "operation-tag"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test.yaml"** con la configuración de reglas **"spectral/rulesets/acme_ruleset.v1.spectral.yaml"**

```bash
spectral lint --ruleset spectral/rulesets/acme_ruleset.v1.spectral.yaml examples/oas3-test.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 3 reglas con severidad "warning"





## Autor

* **Víctor Madrid**