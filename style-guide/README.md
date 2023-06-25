<h1>Spectral (Parte 4): Guía de Estilo de APIs</h1>





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
  - [Implementación desde el fichero .spectral.yml](#implementación-desde-el-fichero-spectralyml)
  - [Implementación desde el fichero acme\_api\_ruleset.v1.auto.spectral.yaml](#implementación-desde-el-fichero-acme_api_rulesetv1autospectralyaml)
  - [Implementación desde el fichero .spectral.yml](#implementación-desde-el-fichero-spectralyml-1)
  - [Implementación desde el fichero acme\_api\_ruleset.v1.refer.spectral.yaml](#implementación-desde-el-fichero-acme_api_rulesetv1referspectralyaml)
  - [Implementación desde una URL con enfoque "autocontenido"](#implementación-desde-una-url-con-enfoque-autocontenido)
  - [Implementación desde una URL con enfoque de "referencias locales"](#implementación-desde-una-url-con-enfoque-de-referencias-locales)
- [Autor](#autor)





## Descripción

En este parte del repositorio se va a enseñar a como plantear una guía de estilo centralizada de diferentes maneras : dentro de un arquetipo, carga local de ficheros, uso en librerías de arquitecturas, uso mediante URL, etc.


Nos encontramos en el directorio **"style-guide/"**

Este directorio se compone de:

* **examples/**: Directorio que contiene los ficheros a analizar
* **spectral/**: Directorio que contiene todo lo relacionado con la herramienta spectral
  * **rules/**: Subdirectorio que contiene los ficheros de reglas utilizados





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

Se podrán seguir varios enfoques:

* Enfoque "Autocontenido"
* Enfoque "Referenciado Local"
* Enfoque "Referenciado Remoto"




### Enfoque "Autocontenido"

El enfoque "autocontenido" hace alusión a que el fichero que define las reglas de Spectral contiene todo los necesario para funcionar al encontrase todo definido en un único fichero, por lo tanto, no contendrá referencias a ficheros locales de reglas


Este enfoque puede tener diferentes implementaciones:

* Implementación desde el fichero .spectral.yml
* Implementación desde el fichero acme_api_ruleset.v1.auto.spectral.yaml


### Implementación desde el fichero .spectral.yml

El fichero de reglas **".spectral.yml"** (fichero por defecto) se define sobre el repositorio de código y podría venir dado por el arquetipo de proyecto utilizado.

En esta implementación se hará uso del contenido del fichero **".spectral.auto.yml"** pero sobre el fichero **".spectral.yml"**

```bash
extends:
  - spectral:oas
  - spectral:asyncapi
rules:
  operation-tags: off
  info-contact: off
  open-api-version-3:
        description: APIs should support OpenAPI V3
        given: $.openapi
        severity: error
        then:
            function: pattern
            functionOptions:
                match: '^3'
```

Cargará el conjunto de reglas para OAS y AsynAPI definido por defecto por Spectral, hay que recordar que cada regla tiene su propia configuración por defecto como puede ser la severidad.

Referenciará a una regla custom definida ad-hoc

En ese caso, se desactivarán las reglas "operation-tag" y "info-contact"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test-error-version.yaml"** con la configuración de reglas **".spectral.yml"**

```bash
spectral lint examples/oas3-test-error-version.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 1 regla con severidad "warning"
* Incumplimiento de 1 regla con severidad "error" de la regla : open-api-version-3



### Implementación desde el fichero acme_api_ruleset.v1.auto.spectral.yaml

El fichero de reglas **"acme_api_ruleset.v1.auto.spectral.yaml"** se define sobre el repositorio y podría venir dado por el arquetipo de proyecto, se localizaría en un directorio de configuración.

Recordar verificar que no debería de existir el fichero por defecto ".spectral.yml"

Para este ejemplo se hará uso del contenido del fichero **"acme_api_ruleset.v1.auto.spectral.yaml"**

```bash
extends:
  - spectral:oas
  - spectral:asyncapi
rules:
  operation-tags: off
  info-contact: off
  open-api-version-3:
        description: APIs should support OpenAPI V3
        given: $.openapi
        severity: error
        then:
            function: pattern
            functionOptions:
                match: '^3'
```

Cargará el conjunto de reglas para OAS y AsynAPI definido por defecto por Spectral, hay que recordar que cada regla tiene su propia configuración por defecto como puede ser la severidad.

Referenciará a una regla custom definida ad-hoc

En ese caso, se desactivarán las reglas "operation-tag" y "info-contact"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test-error-version.yaml"** con la configuración de reglas **"spectral/rulesets/acme_api_ruleset.v1.auto.spectral.yaml"**

```bash
spectral lint examples/oas3-test-error-version.yaml --ruleset spectral/rulesets/acme_api_ruleset.v1.auto.spectral.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 1 regla con severidad "warning"
* Incumplimiento de 1 regla con severidad "error" de la regla : open-api-version-3





### Enfoque "Referenciado Local"

El enfoque "referenciado" hace alusión a que el fichero que define las reglas de Spectral puede contener referencias a ficheros locales.

Si referencia a ficheros locales será importante confirmar que las reglas custom también viajan en el proyecto o bien el arquetipo.

Este enfoque puede tener diferentes implementaciones:

* Implementación desde el fichero .spectral.yml
* Implementación desde el fichero acme_api_ruleset.v1.refer.spectral.yaml



### Implementación desde el fichero .spectral.yml

El fichero de reglas **".spectral.yml"** (fichero por defecto) se define sobre el repositorio y podría venir dado por el arquetipo de proyecto utilizado

En esta implementación se hará uso del contenido del fichero **".spectral.refer.yml"** pero sobre el fichero **".spectral.yml"**

```bash
extends:
  - spectral:oas
  - spectral:asyncapi
  - ./spectral/rulesets/rules/open-api-version-3.yaml
rules:
  operation-tags: off
  info-contact: off
```

Cargará el conjunto de reglas para OAS y AsynAPI definido por defecto por Spectral, hay que recordar que cada regla tiene su propia configuración por defecto como puede ser la severidad.

Referenciará a una regla custom definida de forma local

* Cuidado con la localización relativa del fichero de la regla custom

En ese caso, se desactivarán las reglas "operation-tag" y "info-contact"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test-error-version.yaml"** con la configuración de reglas **".spectral.yml"**

```bash
spectral lint examples/oas3-test-error-version.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 1 regla con severidad "warning"
* Incumplimiento de 1 regla con severidad "error" de la regla : open-api-version-3





### Implementación desde el fichero acme_api_ruleset.v1.refer.spectral.yaml

El fichero de reglas **"acme_api_ruleset.v1.refer.spectral.yaml"** se define sobre el repositorio y podría venir dado por el arquetipo de proyecto, se localizaría en un directorio de configuración.

Recordar verificar qe no debería de existir el fichero por defecto ".spectral.yml"

Para este ejemplo se hará uso del contenido del fichero **"acme_api_ruleset.v1.refer.spectral.yaml"**

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

Referenciará a una regla custom defina de forma local

* Cuidado con la localización relativa del fichero

En ese caso, se desactivarán las reglas "operation-tag" y "info-contact"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test-error-version.yaml"** con la configuración de reglas **"spectral/rulesets/acme_api_ruleset.v1.refer.spectral.yaml"**

```bash
spectral lint examples/oas3-test-error-version.yaml --ruleset spectral/rulesets/acme_api_ruleset.v1.refer.spectral.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 1 regla con severidad "warning"
* Incumplimiento de 1 regla con severidad "error" de la regla : open-api-version-3





### Enfoque "Referenciado Remota"

El enfoque "referenciado" hace alusión a que el fichero que define las reglas de Spectral puede contener referencias a ficheros remotos.

Si referencia a ficheros remotos será importante confirmar que las reglas custom se encuentran operativas y que la referencia utilizada sea "realmente" es válida.

Este enfoque puede tener diferentes implementaciones:

* Implementación desde una URL con enfoque "autocontenido"
* Implementación desde una URL con enfoque de "referencias locales"



### Implementación desde una URL con enfoque "autocontenido"

El fichero de reglas **"acme_api_ruleset.v1.auto.spectral.yaml"**  se define en la URL :

```bash
https://raw.githubusercontent.com/vjmadrid/enmilocalfunciona-spectral/main/style-guide/spectral/rulesets/acme_api_ruleset.v1.auto.spectral.yaml
```

Este fichero contiene :

```bash
extends:
  - spectral:oas
  - spectral:asyncapi
rules:
  operation-tags: off
  info-contact: off
  open-api-version-3:
        description: APIs should support OpenAPI V3
        given: $.openapi
        severity: error
        then:
            function: pattern
            functionOptions:
                match: '^3'
```

Cargará el conjunto de reglas para OAS y AsynAPI definido por defecto por Spectral, hay que recordar que cada regla tiene su propia configuración por defecto como puede ser la severidad.

Refernciará a una regla custom defina desde una URL

En ese caso se desactivará la regla "operation-tag"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test-error-version.yaml"** con la configuración de reglas **"desde su URL"**

```bash
spectral lint examples/oas3-test-error-version.yaml --ruleset https://raw.githubusercontent.com/vjmadrid/enmilocalfunciona-spectral/main/style-guide/spectral/rulesets/acme_api_ruleset.v1.auto.spectral.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 1 regla con severidad "warning"
* Incumplimiento de 1 regla con severidad "error" de la regla : open-api-version-3




### Implementación desde una URL con enfoque de "referencias locales"

El fichero de reglas **"acme_api_ruleset.v1.refer.spectral.yaml"**  se define en la URL :

```bash
https://raw.githubusercontent.com/vjmadrid/enmilocalfunciona-spectral/main/style-guide/spectral/rulesets/acme_api_ruleset.v1.refer.spectral.yaml
```

Para ello se tendría disponer de alguna localización donde este fichero estubiera publicado de forma pública

Este fichero contiene :

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

Refernciará a una regla custom defina de forma local

En ese caso se desactivará la regla "operation-tag"

Se ejecutará una operación de lintado sobre el fichero **"examples/oas3-test-error-version.yaml"** con la configuración de reglas **"desde su URL"**

```bash
spectral lint examples/oas3-test-error-version.yaml --ruleset https://raw.githubusercontent.com/vjmadrid/enmilocalfunciona-spectral/main/style-guide/spectral/rulesets/acme_api_ruleset.v1.refer.spectral.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 1 regla con severidad "warning"
* Incumplimiento de 1 regla con severidad "error" de la regla : open-api-version-3









## Autor

* **Víctor Madrid**