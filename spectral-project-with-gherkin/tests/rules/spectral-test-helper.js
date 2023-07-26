const { Spectral, Document } = require('@stoplight/spectral-core');
const Parsers = require('@stoplight/spectral-parsers')
const { bundleAndLoadRuleset } = require("@stoplight/spectral-ruleset-bundler/with-loader")
const { fetch } = require('@stoplight/spectral-runtime')

const fs = require('fs')
const path = require('path')

const retrieveRuleset = async (filePath) => {
    return await bundleAndLoadRuleset(path.resolve(filePath), { fs, fetch })
}

const retrieveDocument = (filePath) => {
    const resolved = path.resolve(filePath)
    const body = fs.readFileSync(resolved, 'utf8')
    return new Document(body, Parsers.Yaml, filePath)
}

const setupSpectral = async (rulesetFilePath) => {
    const ruleset = await retrieveRuleset(rulesetFilePath)
    const spectral = new Spectral()
    spectral.setRuleset(ruleset)
    return spectral
}

module.exports = {
    retrieveDocument,
    setupSpectral
}
