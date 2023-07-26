const { Spectral, Document } = require('@stoplight/spectral-core');
const Parsers = require('@stoplight/spectral-parsers')
const { bundleAndLoadRuleset } = require("@stoplight/spectral-ruleset-bundler/with-loader")
const { fetch } = require('@stoplight/spectral-runtime')

const fs = require('fs')
const path = require('path')

const { Given, When, Then } = require('@cucumber/cucumber');
const should = require('chai').should();

Given('the Spectral rule {string}', function(rule) {
    this.rule = rule;
});

Given('the OAS3 description document', function(oas3Document) {
    this.document = new Document(oas3Document, Parsers.Yaml);
});

When('the OAS description document is linted', async function() {
    const spectral = new Spectral();
    //spectral.registerFormat('oas3', isOpenApiv3);
    //await spectral.loadRuleset([
    //    join(__dirname, '../../config/spectral/rules/' + this.rule + '.yaml')
    //]);

    const rulesetFilePath = path.join(__dirname, '../../config/spectral/rules/' + this.rule + '.yaml');
    spectral.setRuleset(await bundleAndLoadRuleset(rulesetFilePath, { fs, fetch }));
    this.results = await spectral.run(this.document);
});

Then('there should be no errors', function() {
    console.log(this.results);
    this.results.should.have.lengthOf(0, JSON.stringify(this.results, null, "\t"));
});

Then('the error message should be', function(expected) {
    this.results.should.have.lengthOf(1, JSON.stringify(this.results, null, "\t"));
    this.results[0].code.should.equal(this.rule, JSON.stringify(this.results, null, "\t"));
    this.results[0].message.should.equal(expected, JSON.stringify(this.results, null, "\t"));
});