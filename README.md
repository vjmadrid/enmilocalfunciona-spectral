# Spectral



## Prerrequisitos

Define que elementos son necesarios para instalar el software

* Node.js



## Instalación


## Uso





### Escenario 1: Ejecutar comando "out-of-the-box

Se ejecutará una operación de lintado sobre el fichero "api/examples/test.yaml" sin configuración de uso de reglas:

```bash
spectral lint api/examples/test.yaml
```

* No tiene definido el parámetro de incluir una regla
* No tiene el fichero ".spectral.yaml" no se encuentra definido en la ubicación del proyecto

Como resultado se mostrara un mensaje de error : **"No ruleset has been found. Please provide a ruleset using the --ruleset CLI argument, or make sure your ruleset file matches .?spectral.(js|ya?ml|json)%"**

Se puede crear el fichero ".spectral.yaml" sobre el directorio del proyecto con el siguiente contenido:

```
extends: spectral:oas
```

Se volverá a ejecutar el comando y se verá que se realiza el análisis correctamente





### Escenario 2: Ejecutar comando con el ruleset "test2_ruleset.spectral.yaml"

El fichero de reglas "test2_ruleset.spectral.yaml" contiene :

```
extends: spectral:oas
```

Cargará el conjunto de reglas para OAS definido por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad


Se ejecutará una operación de lintado sobre el fichero "api/examples/test.yaml" con la configuración de reglas "test2_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/rulesets/test2_ruleset.spectral.yaml api/examples/test.yaml
```

Se mostrarán los resultados del lintado que mostrará el incumplimiento de 5 reglas con severidad "warning"





### Escenario 3: Ejecutar comando con el ruleset "test3_ruleset.spectral.yaml"

El fichero de reglas "test3_ruleset.spectral.yaml" contiene :

```
extends: [[spectral:oas, all]]
```

Cargará el conjunto de reglas para OAS definido por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Con el valor "all" se harán uso de todas las reglas incluso las desactivadas


Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test3_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/rulesets/test3_ruleset.spectral.yaml api/examples/test.yaml
```

Se mostrarán los resultados del lintado que mostrará el incumplimiento de 8 reglas con severidad "warning". Por ejemplo ahora aparecerá el incumplimiento de la regla "license-url"





### Escenario 4: Ejecutar comando con el ruleset "test4_ruleset.spectral.yaml"

El fichero de reglas "test4_ruleset.spectral.yaml" contiene :

```
extends: [[spectral:oas, off]]
rules:
    openapi-tags: true
```

Cargará el conjunto de reglas para OAS definido por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Con el valor "off" se desactivarán todas las reglas y en la sección de reglas se decide activar "openapi-tags"

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test4_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/rulesets/test4_ruleset.spectral.yaml api/examples/test.yaml
```

Se mostrarán los resultados del lintado que mostrará el incumplimiento de 1 regla con severidad "warning". Esta regla se trata de la que se ha activado





### Escenario 5: Ejecutar comando con el ruleset "test5_ruleset.spectral.yaml"

El fichero de reglas "test5_ruleset.spectral.yaml" contiene :

```
extends:
  - ./test2_ruleset.spectral.yaml
rules:
  operation-description: off
```

Se hará uso de las reglas definidas en otro fichero local y se desactivará la regla "operation-description"

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test5_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/rulesets/test5_ruleset.spectral.yaml api/examples/test.yaml
```

Se mostrarán los resultados del lintado que mostrará el incumplimiento de 4 reglas con severidad "warning", ya que se ha desactivado una de las reglas que si se encontraba activa y que venía dada por la configuración del fichero local referenciado





### Escenario 6: Ejecutar comando con el ruleset "test6_ruleset.spectral.yaml"

El fichero de reglas "test6_ruleset.spectral.yaml" contiene :

```
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

Cargará el conjunto de reglas para OAS definido por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Se hará uso de una regla custom que se encarga de evaluar que la versión de Open API sea v3.

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test5_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/rulesets/test6_ruleset.spectral.yaml api/examples/test2.yaml
```

Se mostrarán los resultados del lintado que mostrará el incumplimiento de 2 reglas :

* unrecognized-format (warning). Regla establecida en el conjunto de reglas por defecto de spectal para OAS encargada de controlar la versión de los formatos registrados
* open-api-version-3 (error). Regla custom que controla la versión de Open API para que sólamente pueda ser de la familia v3






### Escenario 7: Ejecutar comando con el ruleset "test7_ruleset.spectral.yaml"

El fichero de reglas "test6_ruleset.spectral.yaml" contiene :

```
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

Cargará el conjunto de reglas para OAS definido por Spectral, donde cada regla tiene su propia configuración por defecto como puede ser la severidad

Se hará uso de una regla custom que se encarga de evaluar que la versión de Open API sea v3.

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test5_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/rulesets/test7_ruleset.spectral.yaml api/examples/test3.yaml
```

Se mostrarán los resultados del lintado que mostrará el incumplimiento de 8 reglas con severidad "warning" y la regla definida con la función customizada



```bash
spectral lint --ruleset api/rulesets/test8_ruleset.spectral.yaml api/examples/test.yaml
```

```bash
spectral lint --ruleset api/rulesets/test9_ruleset.spectral.yaml api/examples/test.yaml
```



## Autor

* **Víctor Madrid**