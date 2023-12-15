/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import {
  fetchLatestCommitDate, parseRepositoryUrl,
} from './helpers.js';
import fs from 'node:fs';
import Handlebars from 'handlebars';

const readmeTemplate = fs.readFileSync('./templates/readme.hbs');
const template = Handlebars.compile(readmeTemplate.toString());

const repoPairs = [{
  spec: 'https://github.com/w3c/vc-di-ecdsa',
  testSuite: 'https://github.com/w3c/vc-di-ecdsa-test-suite',
}, {
  spec: 'https://github.com/w3c/vc-di-eddsa',
  testSuite: 'https://github.com/w3c/vc-di-eddsa-test-suite',
}, {
  spec: 'https://github.com/w3c/vc-data-model',
  testSuite: 'https://github.com/w3c/vc-data-model-2.0-test-suite',
}, {
  spec: 'https://github.com/w3c/vc-di-bbs',
  testSuite: 'https://github.com/w3c-ccg/vc-di-bbs-test-suite',
}, {
  spec: 'https://github.com/w3c/vc-bitstring-status-list',
  testSuite: 'https://github.com/w3c-ccg/status-list-2021-test-suite',
}, {
  spec: 'https://github.com/w3c-ccg/vc-api',
  testSuite: 'https://github.com/w3c-ccg/vc-api-issuer-test-suite',
}, {
  spec: 'https://github.com/w3c-ccg/vc-api',
  testSuite: 'https://github.com/w3c-ccg/vc-api-verifier-test-suite',
}, {
  spec: 'https://github.com/w3c-ccg/did-method-key',
  testSuite: 'https://github.com/w3c-ccg/did-key-test-suite',
}, {
  spec: 'https://github.com/w3c/vc-data-integrity',
  testSuite: 'https://github.com/w3c-ccg/data-integrity-test-suite-assertion',
}, {
  spec: 'https://github.com/w3c-ccg/vc-refresh-2021',
  testSuite: 'https://github.com/w3c-ccg/vc-refresh-2021-test-suite',
}, {
  spec: 'https://github.com/w3c/vc-di-eddsa',
  testSuite: 'https://github.com/w3c/vc-di-ed25519signature2020-test-suite',
}];

/**
 * Retrieves the most recent commit dates from a list of public VC specs and
 * test suites and displays them within a table in the README file.
 *
 * @param {Array.<object>} repoPairs - An array of objects of pairs of VC spec
 *   and test suites.
 *
 * @returns {undefined} - No return value.
 */
async function getLatestCommits(repoPairs) {
  const result = [];
  for(const repoPair of repoPairs) {
    const {spec, testSuite} = repoPair;
    const specLatestCommitDate = await fetchLatestCommitDate(spec);
    const testSuiteLatestCommitDate = await fetchLatestCommitDate(testSuite);
    const {owner: specOwner, name: specName} = parseRepositoryUrl(spec);
    const {
      owner: testSuiteOwner, name: testSuiteName,
    } = parseRepositoryUrl(testSuite);
    const repoPairWithLatestCommitDates = [{
      name: `${specOwner}/${specName}`,
      latestCommitDate: specLatestCommitDate,
    }, {
      name: `${testSuiteOwner}/${testSuiteName}`,
      latestCommitDate: testSuiteLatestCommitDate,
    }];
    result.push(repoPairWithLatestCommitDates);
  }
  const readmeContent = template({repoPairs: result});
  fs.writeFileSync('./README.md', readmeContent);
}

getLatestCommits(repoPairs);
