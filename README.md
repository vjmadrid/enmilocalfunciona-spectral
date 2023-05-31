# Spectral



## Prerrequisitos

Define que elementos son necesarios para instalar el software

* Node.js



## Instalación


## Uso

### Scenario 1: Ejecutar comando "out-of-the-box

```bash
spectral lint examples/test.yaml
```

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas por defecto



### Scenario 2: Ejecutar comando con el ruleset "test1_ruleset.spectral.yaml"

```bash
spectral lint --ruleset rulesets/test1_ruleset.spectral.yaml examples/test.yaml
```

El fichero de reglas "test1_ruleset.spectral.yaml" contiene :
* Extensión de reglas "spectral:oas" (Definidas por defecto por spectral)

Se ejecutará una operación de lintado sobre el fichero "examples/test.yaml" con la configuración de reglas "test1_ruleset.spectral.yaml"


## Autor

* **Víctor Madrid**