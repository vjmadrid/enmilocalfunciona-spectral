const { retrieveDocument, setupSpectral } = require('./spectral-test-helper')
//const {expect, should} = require('chai')
const expect = require('chai').expect
const assert = require('chai').assert
const should = require('chai').should()


const RULESET_FILE_PATH = 'config/spectral/rules/open-api-version-3.yaml'


test('OpenAPI has a `3` version', async () => {
    const spectral = await setupSpectral(RULESET_FILE_PATH)
    const document = retrieveDocument('examples/example1.yaml')

    const results = await spectral.run(document)

    expect(results).to.have.length(0)
})

test('OpenAPI does not have a `3` version', async () => {
    const spectral = await setupSpectral(RULESET_FILE_PATH)
    const document = retrieveDocument('examples/example2-error-version.yaml')

    const results = await spectral.run(document)

    expect(results).to.have.length(1)
    expect(results[0].code).equal("open-api-version-3")
    expect(results[0].message).equal("APIs should support OpenAPI V3")

    //should
    results.should.have.length(1)
    results[0].code.should.equal("open-api-version-3")
    results[0].message.should.equal("APIs should support OpenAPI V3")
})
