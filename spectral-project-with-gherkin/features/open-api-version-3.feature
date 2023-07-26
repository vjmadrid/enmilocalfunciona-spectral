Feature: APIs should support OpenAPI V3

  Background:
    Given the Spectral rule 'open-api-version-3'

  Scenario Outline: OpenAPI has a `3` version
    Given the OAS3 description document
    """
    openapi: <version>
    info:
      title: Minimal OAS 3.0.x description document
      version: 1.0.0 - Test
    paths: {}
    """
    When the OAS description document is linted
    Then there should be no errors

    Examples:
        | version |
        | 3.0.3   |
        | 3.7.8   |

  Scenario Outline: OpenAPI doesn't have a `3` version
    Given the OAS3 description document
    """
    openapi: <version>
    info:
      title: Minimal OAS 3.0.x description document
      version: 1.0.0 - Test
    paths: {}
    """
    When the OAS description document is linted
    Then the error message should be
    """
    APIs should support OpenAPI V3
    """

    Examples:
        | version |
        | 2.0.3   |
        | 4.0.3   |