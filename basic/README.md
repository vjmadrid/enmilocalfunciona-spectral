<h1>Spectral (Parte 1)</h1>





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
  - [Escenario 1: Ejecutar comando "out-of-the-box](#escenario-1-ejecutar-comando-out-of-the-box)
  - [Escenario 2: Ejecutar comando con el ruleset "test2\_ruleset.spectral.yaml"](#escenario-2-ejecutar-comando-con-el-ruleset-test2_rulesetspectralyaml)
  - [Escenario 3: Ejecutar comando con el ruleset "test3\_ruleset.spectral.yaml"](#escenario-3-ejecutar-comando-con-el-ruleset-test3_rulesetspectralyaml)
  - [Escenario 4: Ejecutar comando con el ruleset "test4\_ruleset.spectral.yaml"](#escenario-4-ejecutar-comando-con-el-ruleset-test4_rulesetspectralyaml)
  - [Escenario 5: Ejecutar comando con el ruleset "test5\_ruleset.spectral.yaml"](#escenario-5-ejecutar-comando-con-el-ruleset-test5_rulesetspectralyaml)
  - [Escenario 6: Ejecutar comando con el ruleset "test6\_ruleset.spectral.yaml"](#escenario-6-ejecutar-comando-con-el-ruleset-test6_rulesetspectralyaml)
  - [Escenario 7: Ejecutar comando con el ruleset "test7\_ruleset.spectral.yaml"](#escenario-7-ejecutar-comando-con-el-ruleset-test7_rulesetspectralyaml)
  - [Escenario 8: Ejecutar comando con el ruleset "test8\_ruleset.spectral.yaml"](#escenario-8-ejecutar-comando-con-el-ruleset-test8_rulesetspectralyaml)
  - [Escenario 9: Ejecutar comando con el ruleset "test9\_ruleset.spectral.yaml"](#escenario-9-ejecutar-comando-con-el-ruleset-test9_rulesetspectralyaml)
  - [Escenario 10: Ejecutar comando con el ruleset "test10\_ruleset.spectral.yaml"](#escenario-10-ejecutar-comando-con-el-ruleset-test10_rulesetspectralyaml)
- [Autor](#autor)





## Descripción

En este sección de la serie de artículos se va a **enseñar** a **utilizar** la **herramienta por línea de comando** (tipo CLI) con diferentes **escenarios**, de esta forma se verán todas las cosas que se pueden hacer

Nos encontramos en el directorio **"basic/"**

Este directorio se compone del directorio **"api/"** que es el lugar donde se ubicarán los ejemplos de reglas y los ejemplos de ficheros a analizar

* **examples/**: Directtorio que contiene los ficheros a analizar
* **rulesets/**: Directtorio que contiene los ficheros de reglas definidos
  * **rules/**: Subdirectorio que contiene las reglas declaradas de forma independiente
  * **functions/**: Subdirectorio que contiene al implementación de la validación de una regla





## Estado

Este proyecto se encuentra en construcción





## Stack Tecnológico

### General

* [Node.js](https://nodejs.org/es) >18.x.x


### Dependencias proyectos de arquitectura

N/A


### Dependencias de terceros

N/A





## Pre-Requisitos

* Requerido tener instalado Node.js >18.x.x





## Instalación


### Instalar Spectral CLI Client

>**Importante**
>
>[Spectral CLI Client](https://meta.stoplight.io/docs/spectral/9ffa04e052cc1-spectral-cli) es un módulo de Node.js y una de las mejores formas de utilizarlo de forma sencilla es tenerlo instaldo de forma global

Pasos a seguir

1. Arrancar un terminal
2. Ejecutar el siguiente comando:

```bash
npm install -g @stoplight/spectral-cli
```

3. Verificar que se ha instaldo correctamente ejecutando el siguiente comando

```bash
spectral --version
```


### Spectral Javascript API

Pasos a seguir

1. Arrancar un terminal
2. Ejecutar el siguiente comando:

```bash
npm install -g @stoplight/spectral-core
```






## Configuración

N/A



## Uso

En este apartado se van a detallar una serie de escenarios de trabajo

Para su ejecución se requiere

1. Arrancar un terminal
2. Localizar el PATH de instalación (el lugar donde se encuentra el proyecto)
3. Localizar el directorio "basic/"

A partir de esa localización los comandos deberían de funcionar sin problemas



### Escenario 1: Ejecutar comando "out-of-the-box

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test.yaml"** sin configuración de uso de reglas:

```bash
spectral lint api/examples/oas3-test.yaml
```

Contexto :

* No tiene definido el parámetro de incluir ningún conjunto de reglas
* El fichero ".spectral.yaml" (por defecto) no se encuentra definido en la ubicación del proyecto

Como resultado se mostrara un mensaje de error : **"No ruleset has been found. Please provide a ruleset using the --ruleset CLI argument, or make sure your ruleset file matches .?spectral.(js|ya?ml|json)%"**

Se puede crear el fichero ".spectral.yaml" sobre el directorio del proyecto con el siguiente contenido:

```bash
extends: spectral:oas
```

Se volverá a ejecutar el comando y se verá que se realiza el análisis correctamente





### Escenario 2: Ejecutar comando con el ruleset "test2_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test2_ruleset.spectral.yaml"** contiene :

```bash
extends: spectral:oas
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, hay que recordar que cada regla tiene su propia configuración por defecto como puede ser la severidad.

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test.yaml"** con la configuración de reglas **"api/rulesets/test2_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test2_ruleset.spectral.yaml api/examples/oas3-test.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 5 reglas con severidad "warning"


Se podrá establecer un parámetro "-F" para Spectral de un error cuando se encuentre un incumplimiento de la regla con valor "warn"

```bash
spectral lint --ruleset api/rulesets/test2_ruleset.spectral.yaml -F warn api/examples/oas3-test.yaml
```





### Escenario 3: Ejecutar comando con el ruleset "test3_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test3_ruleset.spectral.yaml"** contiene :

```bash
extends: [[spectral:oas, all]]
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Con el valor "all" se harán uso de todas las reglas incluso las desactivadas


Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test.yaml"** con la configuración de reglas **"api/rulesets/test3_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test3_ruleset.spectral.yaml api/examples/oas3-test.yaml
```

Se mostrarán los resultados del lintado :

* Incumplimiento de 8 reglas con severidad "warning" (Por ejemplo aparecerá el incumplimiento de la regla "license-url")





### Escenario 4: Ejecutar comando con el ruleset "test4_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test4_ruleset.spectral.yaml"** contiene :

```bash
extends: [[spectral:oas, off]]
rules:
  openapi-tags: true
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Con el valor "off" se desactivarán todas las reglas y en la sección de reglas se decide activar "openapi-tags"

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test.yaml"** con la configuración de reglas **"api/rulesets/test4_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test4_ruleset.spectral.yaml api/examples/oas3-test.yaml
```

Se mostrarán los resultados del lintado:

* Incumplimiento de 1 regla con severidad "warning". Esta regla se trata de la que se ha activado, el resto se encuentra desactivadas





### Escenario 5: Ejecutar comando con el ruleset "test5_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test5_ruleset.spectral.yaml"** contiene :

```bash
extends:
  - ./test2_ruleset.spectral.yaml
rules:
  operation-description: off
```

Se hará uso de las reglas definidas en otro fichero local por lo que se facilita la composición de ficheros. Además, se desactivará la regla "operation-description" que se encuentra en el fichero referenciado

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test.yaml"** con la configuración de reglas **"api/rulesets/test5_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test5_ruleset.spectral.yaml api/examples/oas3-test.yaml
```

Se mostrarán los resultados del lintado:

* Incumplimiento de 4 reglas con severidad "warning", ya que se ha desactivado una de las reglas que si se encontraba activa y que venía dada por la configuración del fichero local referenciado





### Escenario 6: Ejecutar comando con el ruleset "test6_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test6_ruleset.spectral.yaml"** contiene :

```bash
extends: [[spectral:oas, all]]
rules:
    open-api-version-3:
        description: APIs should support OpenAPI V3
        given: $.openapi
        severity: error
        then:
            function: pattern
            functionOptions:
                match: '^3'
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Se hará uso de una regla custom definida "ad-hoc" en el propio fichero que se encarga de evaluar que la versión de Open API sea de la familia v3

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test2.yaml"** con la configuración de reglas **"api/rulesets/test5_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test6_ruleset.spectral.yaml api/examples/oas3-test2.yaml
```

Se mostrarán los resultados del lintado:

  * Incumplimiento de 2 reglas :
  * unrecognized-format (warning). Regla establecida en el conjunto de reglas por defecto de spectal para OAS encargada de controlar la versión de los formatos registrados
  * open-api-version-3 (error). Regla custom que controla la versión de Open API para que sólamente pueda ser de la familia v3





### Escenario 7: Ejecutar comando con el ruleset "test7_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test7_ruleset.spectral.yaml"** contiene :

```bash
extends:
- spectral:oas
- ./rules/open-api-version-3.yaml
rules: {}
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Se hará uso de una regla custom definida en un fichero externo y que se encarga de evaluar que la versión de Open API sea v3.

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test2.yaml"** con la configuración de reglas **"api/rulesets/test7_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test7_ruleset.spectral.yaml api/examples/oas3-test2.yaml
```

Se mostrarán los resultados del lintado:

  * Incumplimiento de 2 reglas :
  * unrecognized-format (warning). Regla establecida en el conjunto de reglas por defecto de spectal para OAS encargada de controlar la versión de los formatos registrados
  * open-api-version-3 (error). Regla custom que controla la versión de Open API para que sólamente pueda ser de la familia v3





### Escenario 8: Ejecutar comando con el ruleset "test8_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test8_ruleset.spectral.yaml"** contiene :

```bash
extends:
  - ./test2_ruleset.spectral.yaml
  - ./test7_ruleset.spectral.yaml
```

Cargará 2 rulesets diferentes -> Composición de RuleSets

Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test2.yaml"** con la configuración de reglas **"api/rulesets/test8_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test8_ruleset.spectral.yaml api/examples/oas3-test2.yaml
```

Se mostrarán los resultados del lintado:

  * Incumplimiento de 2 reglas :
  * unrecognized-format (warning). Regla establecida en el conjunto de reglas por defecto de spectal para OAS encargada de controlar la versión de los formatos registrados
  * open-api-version-3 (error). Regla custom que controla la versión de Open API para que sólamente pueda ser de la familia v3





### Escenario 9: Ejecutar comando con el ruleset "test9_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test9_ruleset.spectral.yaml"** contiene :

```bash
extends: [[spectral:oas, all]]
functions: [responses]
rules:
    default-response-fallback:
        message: "Response object does not have 2xx operation or default set"
        given: "$.paths.[*].[*].responses"
        severity: error
        then:
          function: responses
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Se referencia que se van a utilizar funciones y que en concreto cargue el JS denominado "responses"

El fichero **"./functions/responses.js"**

```bash
module.exports = (responseObjects) => {
    /**
     * Loop through the response objects
     */
    const okOrDefault = Object.keys(responseObjects)
        .filter((key) => key.match(/2[0-9]{2}|default/));

    if (okOrDefault.length === 0) {
        return [{ message: 'Both 2xx operations and default are missing' }];
    }
};
```

Se hará uso de una regla custom que se hará uso de la función definida, esta se encarga de que tenga defina la respuesta 200 o la default


Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test3.yaml"** con la configuración de reglas **"api/rulesets/test9_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test9_ruleset.spectral.yaml api/examples/oas3-test3.yaml
```

Se mostrarán los resultados del lintado:

* Incumplimiento de 8 reglas con severidad "warning" y la regla definida con la función customizada
* Incumplimiento de 1 regla con severidad "error" que es la hemos definido





### Escenario 10: Ejecutar comando con el ruleset "test10_ruleset.spectral.yaml"

El fichero de reglas **"api/rulesets/test10_ruleset.spectral.yaml"** contiene :

```bash
extends:
- spectral:oas
- ./test10_functions_ruleset.spectral.yaml
- ./rules/open-api-version-3.yaml
rules: {}
```

Cargará el conjunto de reglas para OAS definido por defecto por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Cargará un ruleset externo

* El fichero **"./test10_functions_ruleset.spectral.yaml"**

```bash
functions: [empty-object]
rules:
    security-must-be-enforced-for-unsafe-endpoints:
        message: Security must be applied to "write" endpoints
        severity: error
        given: "$.paths.*[?(@property == 'post' || @property == 'put' || @property == 'patch' || @property == 'delete')]"
        then:
          - field: security
            function: truthy
    security-object-must-not-be-a-hacked-in-empty-object:
        message: "{{error}}"
        severity: error
        given: "$.paths.*[?(@property == 'post' || @property == 'put' || @property == 'patch' || @property == 'delete')].security.*"
        then:
          function: empty-object
```

Cargará una regla externa desde un fichero externo

* El fichero **"./open-api-version-3.yaml"**

```bash
rules:
    open-api-version-3:
        description: APIs should support OpenAPI V3
        given: $.openapi
        severity: error
        then:
            function: pattern
            functionOptions:
                match: '^3'
```


Se ejecutará una operación de lintado sobre el fichero **"api/examples/oas3-test3.yaml"** con la configuración de reglas **"api/rulesets/test10_ruleset.spectral.yaml"**

```bash
spectral lint --ruleset api/rulesets/test10_ruleset.spectral.yaml api/examples/oas3-test3.yaml
```

Se mostrarán los resultados del lintado:

* Incumplimiento de 5 reglas con severidad "warning" y la regla definida con la función customizada





## Autor

* **Víctor Madrid**