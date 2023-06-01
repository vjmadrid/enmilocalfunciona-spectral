# Spectral



## Prerrequisitos

Define que elementos son necesarios para instalar el software

* Node.js



## Instalación


## Uso

### Escenario 1: Ejecutar comando "out-of-the-box

```bash
spectral lint api/examples/test.yaml
```

Se ejecutará una operación de lintado sobre el fichero "api/xamples/test.yaml" sin configuración de reglas :

* No tiene definido el parametro de incluir una regla
* No tiene definido el fichero por defecto (.spectral)


Como resultado se mostrara un mensaje de error : "No ruleset has been found. Please provide a ruleset using the --ruleset CLI argument, or make sure your ruleset file matches .?spectral.(js|ya?ml|json)%"


### Escenario 2: Ejecutar comando con el ruleset "test1_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/ruleset/test1_ruleset.spectral.yaml api/examples/test.yaml
```

El fichero de reglas "test1_ruleset.spectral.yaml" contiene :

* Extensión de reglas "spectral:oas" (Definidas por defecto por spectral)

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test1_ruleset.spectral.yaml"



### Escenario 3: Ejecutar comando con el ruleset "test2_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/ruleset/test2_ruleset.spectral.yaml api/examples/test.yaml
```

El fichero de reglas "test2_ruleset.spectral.yaml" contiene :

* Extensión de reglas "[spectral:oas, all]" (Definidas por defecto por spectral)

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test2_ruleset.spectral.yaml"



### Escenario 4: Ejecutar comando con el ruleset "test3_ruleset.spectral.yaml"

```bash
spectral lint --ruleset api/ruleset/test3_ruleset.spectral.yaml api/examples/test.yaml
```

El fichero de reglas "test3_ruleset.spectral.yaml" contiene :

* Extensión de reglas "[spectral:oas, all]" (Definidas por defecto por spectral)

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test2_ruleset.spectral.yaml"

## Autor

* **Víctor Madrid**