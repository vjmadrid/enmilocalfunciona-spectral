
rules:
    open-api-version-3:
        description: APIs should support OpenAPI V3
        given: $.openapi
        severity: error
        then:
        function: pattern
        functionOptions:
            match: '^3'
    oas3-api-servers:
        description: "OpenAPI `servers` must be present and non-empty."
        formats: ["oas3"]
        given: "$"
        then:
        field: servers
        function: schema
        functionOptions:
            schema:
            items:
                type: object
            minItems: 1
            type: array
my-rule-one:
    description: Tags must have a description.
    given: $.tags[*]
    severity: error
    then:
      field: description
      function: truthy


hyphen-delimited-uris:
    message: "Words in the path must be lowercase and delimited by a hyphen or concatenated, or be a path parameter"
    severity: error
    given: "$.paths[*]~"
    then:
      function: pattern
      functionOptions:
        match: "^(?:\/(?:[a-z]+(?:-[a-z]+|)+|\\{[a-zA-Z]+\\}))+$"