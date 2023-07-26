const { Spectral, Document } = require('@stoplight/spectral-core');
const Parsers = require('@stoplight/spectral-parsers')
const { bundleAndLoadRuleset } = require("@stoplight/spectral-ruleset-bundler/with-loader")
const { fetch } = require('@stoplight/spectral-runtime')
const { DiagnosticSeverity } = require('@stoplight/types')


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

function resultsForCode(results, code) {
    return results.filter((r) => r.code === code)
}

function resultsForSeverity (results, severity) {
    return results.filter((r) => DiagnosticSeverity[r.severity] === severity)
}

function getErrors (results) {
    return resultsForSeverity(results, 'Error')
}

function getWarnings (results) {
    return resultsForSeverity(results, 'Warn')
}

function getInformativeResults (results) {
    return resultsForSeverity(results, 'Information')
}

function getHints (results) {
    return resultsForSeverity(results, 'Hint')
}



module.exports = {
    retrieveDocument,
    setupSpectral,
    resultsForCode,
    resultsForSeverity,
    getErrors,
    getWarnings,
    getInformativeResults,
    getHints
}
